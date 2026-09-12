/* The preview frame: one demo at a time, in the package's own stylesheet,
 * with nothing of the catalog around it. The catalog embeds one such
 * document per brand (preview-<id>.html, see components/DemoFrame.tsx):
 * the demos are Tailwind, their classes need their own Tailwind build, and
 * two brands' utilities share names and cannot live in one document.
 *
 *   preview-januna.html?pkg=januna&slug=button&i=0
 *
 * The document is loaded once per visit to the catalog and then told which
 * demo to show by message, so paging through components never reloads it.
 * It reports its height to the parent as it changes, so the frame is
 * exactly as tall as the demo, popups included. Each brand's entry
 * (preview-<id>.tsx) imports its stylesheet and calls mountPreview. */
import * as React from "react";
import { StrictMode, Suspense, lazy, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import type { Pkg } from "./types";

type Lazy = React.LazyExoticComponent<React.ComponentType>;
/** Demos that are not a component's page: the introduction's card. */
export type Extra = Record<string, Lazy>;
export const lazyDemo = (load: () => Promise<{ default: React.ComponentType }>): Lazy => lazy(load);

type Shown = { pkg: string; slug: string; index: number };

function fromUrl(): Shown {
  const q = new URLSearchParams(location.search);
  return { pkg: q.get("pkg") ?? "", slug: q.get("slug") ?? "", index: Number(q.get("i") ?? 0) };
}
const THUMB = new URLSearchParams(location.search).get("thumb") === "1";
// A card's preview shows through to the card: no sheet of its own.
if (THUMB) document.documentElement.classList.add("thumb");

/** The document's height as the frame should be: the flow height, or the
 *  room anything portalled into <body> needs — popups and dialogs sit fixed,
 *  so they never enter scrollHeight. Measured so the frame *converges*: a
 *  popup below its trigger needs its bottom edge; a dialog centred in the
 *  viewport, or a drawer pinned to its bottom edge, needs its own height —
 *  chasing their bottom edge would move them down and grow forever. */
function neededHeight(): number {
  const vh = window.innerHeight;
  let h = document.documentElement.scrollHeight;
  const SEL = "[data-slot$='popup'], [role='dialog'], [role='menu'], [role='listbox'], [role='tooltip']";
  for (const root of Array.from(document.body.children)) {
    for (const node of [root, ...Array.from(root.querySelectorAll<HTMLElement>(SEL))]) {
      const r = node.getBoundingClientRect();
      if (r.height === 0 || r.width === 0) continue;
      const fullscreen = r.top <= 1 && r.bottom >= vh - 1;
      const pinnedToBottom = Math.abs(r.bottom - vh) <= 2;
      const centred = Math.abs(r.top - (vh - r.bottom)) <= 4;
      if (fullscreen) continue;
      if (pinnedToBottom || centred) h = Math.max(h, Math.ceil(r.height) + 48);
      else h = Math.max(h, Math.ceil(r.bottom) + 24);
    }
  }
  return Math.min(h, 960);
}

function Report({ id }: { id: string }) {
  useEffect(() => {
    const send = () => parent.postMessage({ type: "demo-height", id, height: neededHeight() }, "*");
    const ro = new ResizeObserver(send);
    ro.observe(document.body);
    // Popups portal into <body> after the demo mounts; watch for them too.
    const mo = new MutationObserver(send);
    mo.observe(document.body, { childList: true, subtree: true, attributes: true });
    send();
    return () => {
      ro.disconnect();
      mo.disconnect();
    };
  }, [id]);
  return null;
}

/** Safari has no requestIdleCallback; a short timeout is idle enough. */
const idle = (cb: () => void) =>
  typeof requestIdleCallback === "function" ? requestIdleCallback(cb) : setTimeout(cb, 150);
/** Every demo of the brand, fetched in idle time after the first one is up,
 *  so paging through the catalog finds each chunk already in the cache. */
function prefetch(demos: Record<string, () => Promise<unknown>>) {
  const loaders = Object.values(demos);
  const next = () => {
    const load = loaders.shift();
    if (!load) return;
    load()
      .catch(() => undefined)
      .finally(() => idle(next));
  };
  idle(next);
}

function Preview({ pkg, extra, demos }: { pkg: Pkg; extra: Extra; demos: Record<string, () => Promise<unknown>> }) {
  const [shown, setShown] = useState<Shown>(fromUrl);
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.source !== parent || e.data?.type !== "demo-show") return;
      setShown({ pkg: e.data.pkg, slug: e.data.slug, index: e.data.index });
    };
    window.addEventListener("message", onMessage);
    parent.postMessage({ type: "demo-ready" }, "*");
    prefetch(demos);
    return () => window.removeEventListener("message", onMessage);
  }, [demos]);

  const Demo = pkg.entries.find((e) => e.slug === shown.slug)?.examples[shown.index]?.Component ?? extra[shown.slug];
  const id = `${shown.pkg}/${shown.slug}/${shown.index}`;
  if (shown.pkg !== pkg.id || !Demo) return <p className="p-6 text-sm">No such demo.</p>;
  return (
    <div
      data-brand={pkg.id}
      className={
        THUMB
          ? "flex items-center justify-center bg-transparent p-4 text-foreground"
          : "flex min-h-24 items-center justify-center bg-background px-8 py-10 text-foreground"
      }
    >
      <Suspense fallback={null}>
        <Demo key={id} />
      </Suspense>
      <Report id={id} />
    </div>
  );
}

export function mountPreview(pkg: Pkg, extra: Extra, demos: Record<string, () => Promise<unknown>>) {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Preview pkg={pkg} extra={extra} demos={demos} />
    </StrictMode>,
  );
}
