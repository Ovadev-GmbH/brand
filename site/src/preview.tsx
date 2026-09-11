/* The preview frame: one demo, in the package's own stylesheet, with nothing
 * of the catalog around it. The catalog embeds this document in an iframe
 * (components/DemoFrame.tsx) for every package whose demos are Tailwind —
 * their classes need their own Tailwind build, and their theme would collide
 * with the catalog's.
 *
 *   preview.html?pkg=januna&slug=button&i=0[&thumb=1]
 *
 * It reports its height to the parent as it changes, so the frame is exactly
 * as tall as the demo, popups included. */
import { StrictMode, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
import type { Pkg } from "./types";
import { januna } from "./registry/januna";
import "./styles/preview.css";

/* Only the packages whose demos are framed — not the registry index, which
   would carry every other package's stylesheet into this document. */
const FRAMED: Pkg[] = [januna];

const q = new URLSearchParams(location.search);
const pkg = FRAMED.find((p) => p.id === q.get("pkg"));
const entry = pkg?.entries.find((e) => e.slug === q.get("slug"));
const example = entry?.examples[Number(q.get("i") ?? 0)];
const thumb = q.get("thumb") === "1";
const id = `${q.get("pkg")}/${q.get("slug")}/${q.get("i") ?? 0}`;

function Report() {
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
  }, []);
  return null;
}

function Preview() {
  if (!pkg || !example) return <p className="p-6 text-sm">No such demo.</p>;
  const Demo = example.Component;
  return (
    <div
      data-brand={pkg.id}
      className={
        thumb
          ? "flex min-h-24 items-center justify-center bg-background p-4 text-foreground"
          : "bg-background p-6 text-foreground"
      }
    >
      <Suspense fallback={null}>
        <Demo />
      </Suspense>
      <Report />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Preview />
  </StrictMode>,
);
