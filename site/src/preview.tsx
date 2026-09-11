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
import { StrictMode, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import type { Pkg } from "./types";
import { januna } from "./registry/januna";
import "./styles/preview.css";

/* Only the packages whose demos are framed — not the registry index, which
   would carry every other package's stylesheet into this document. */
const FRAMED: Pkg[] = [januna];

type Shown = { pkg: string; slug: string; index: number };

function fromUrl(): Shown {
  const q = new URLSearchParams(location.search);
  return { pkg: q.get("pkg") ?? "", slug: q.get("slug") ?? "", index: Number(q.get("i") ?? 0) };
}

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
  const example = pkg?.entries.find((e) => e.slug === shown.slug)?.examples[shown.index];
  const id = `${shown.pkg}/${shown.slug}/${shown.index}`;
  if (!pkg || !example) return <p className="p-6 text-sm">No such demo.</p>;
  const Demo = example.Component;
  return (
    <div data-brand={pkg.id} className="bg-background p-6 text-foreground">
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
