import * as React from "react";
import type { PkgId } from "../types";

/** A demo from a Tailwind package, embedded from preview.html.
 *
 *  The document inside is loaded once and kept: moving from one component's
 *  page to the next changes the demo by message, not by a new page load, so
 *  the frame never boots React and the stylesheet twice. Its `src` is fixed
 *  at mount for that reason — React updating it would navigate the frame.
 *
 *  The frame sizes itself to what the document reports (src/preview.tsx),
 *  so a demo that opens a popup grows the frame rather than clipping it.
 *  `tall` gives overlays room to open in: a dialog centres itself in the
 *  frame's viewport, and a frame the height of its trigger has none. */
export function DemoFrame({
  pkg,
  slug,
  index,
  tall = false,
}: {
  pkg: PkgId;
  slug: string;
  index: number;
  tall?: boolean;
}) {
  const id = `${pkg}/${slug}/${index}`;
  const min = tall ? 480 : 96;
  const frame = React.useRef<HTMLIFrameElement>(null);
  const [ready, setReady] = React.useState(false);
  const [height, setHeight] = React.useState(min);
  const [src] = React.useState(
    () => `${import.meta.env.BASE_URL}preview.html?pkg=${pkg}&slug=${slug}&i=${index}`,
  );

  React.useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow) return;
      if (e.data?.type === "demo-ready") setReady(true);
      if (e.data?.type === "demo-height" && e.data.id === id) setHeight(Math.max(min, e.data.height));
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [id, min]);

  // Tell the frame which demo to show, once it is listening and whenever the
  // page moves on. The first demo is also in the URL, so an early message
  // lost before the frame boots costs nothing.
  React.useEffect(() => {
    if (ready) frame.current?.contentWindow?.postMessage({ type: "demo-show", pkg, slug, index }, "*");
  }, [ready, pkg, slug, index]);

  return (
    <iframe
      ref={frame}
      src={src}
      title="Demo"
      className="block w-full border-0 transition-[height] duration-150"
      style={{ height }}
    />
  );
}
