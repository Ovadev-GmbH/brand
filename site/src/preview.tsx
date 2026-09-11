/* The preview frame: one demo at a time, in the package's own stylesheet,
 * with nothing of the catalog around it. The catalog embeds this document in
 * an iframe (components/DemoFrame.tsx) for every package whose demos are
 * Tailwind — their classes need their own Tailwind build, and their theme
 * would collide with the catalog's.
 *
 *   preview.html?pkg=januna&slug=button&i=0
 *
 * The document is loaded once per visit to the catalog and then told which
 * demo to show by message, so paging through components never reloads it.
 * It reports its height to the parent as it changes, so the frame is
 * exactly as tall as the demo, popups included. */
import * as React from "react";
import { StrictMode, Suspense, lazy, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import type { Pkg } from "./types";
import { januna } from "./registry/januna";
import "./styles/preview.css";

/* Demos that are not a component's page: the introduction's card. */
const EXTRA: Record<string, Record<string, React.LazyExoticComponent<React.ComponentType>>> = {
  januna: { intro: lazy(() => import("./examples/januna/IntroDemo")) },
};

/* Only the packages whose demos are framed — not the registry index, which
   would carry every other package's stylesheet into this document. */
const FRAMED: Pkg[] = [januna];

type Shown = { pkg: string; slug: string; index: number };

function fromUrl(): Shown {
  const q = new URLSearchParams(location.search);
  return { pkg: q.get("pkg") ?? "", slug: q.get("slug") ?? "", index: Number(q.get("i") ?? 0) };
}
const THUMB = new URLSearchParams(location.search).get("thumb") === "1";
// A card's preview shows through to the card: no sheet of its own.
if (THUMB) document.documentElement.classList.add("thumb");

function Report({ id }: { id: string }) {
  useEffect(() => {
    const send = () =>
      parent.postMessage({ type: "demo-height", id, height: document.documentElement.scrollHeight }, "*");
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

/** Every demo, fetched in idle time after the first one is up, so paging
 *  through the catalog finds each chunk already in the cache. */
const DEMOS = import.meta.glob("./examples/*/*Demo.tsx");
function prefetch() {
  const loaders = Object.values(DEMOS);
  const next = () => {
    const load = loaders.shift();
    if (!load) return;
    void load().finally(() => requestIdleCallback(next));
  };
  requestIdleCallback(next);
}

function Preview() {
  const [shown, setShown] = useState<Shown>(fromUrl);
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.source !== parent || e.data?.type !== "demo-show") return;
      setShown({ pkg: e.data.pkg, slug: e.data.slug, index: e.data.index });
    };
    window.addEventListener("message", onMessage);
    parent.postMessage({ type: "demo-ready" }, "*");
    prefetch();
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const pkg = FRAMED.find((p) => p.id === shown.pkg);
  const Demo = pkg?.entries.find((e) => e.slug === shown.slug)?.examples[shown.index]?.Component ?? EXTRA[shown.pkg]?.[shown.slug];
  const id = `${shown.pkg}/${shown.slug}/${shown.index}`;
  if (!pkg || !Demo) return <p className="p-6 text-sm">No such demo.</p>;
  return (
    <div
      data-brand={pkg.id}
      className={THUMB ? "flex items-center justify-center bg-transparent p-4 text-foreground" : "bg-background p-6 text-foreground"}
    >
      <Suspense fallback={null}>
        <Demo key={id} />
      </Suspense>
      <Report id={id} />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Preview />
  </StrictMode>,
);
