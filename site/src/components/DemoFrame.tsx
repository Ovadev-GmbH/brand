import * as React from "react";
import type { PkgId } from "../types";

/** A demo from a Tailwind package, embedded from preview-<brand>.html.
 *
 *  The document inside is loaded once and kept: moving from one component's
 *  page to the next changes the demo by message, not by a new page load, so
 *  the frame never boots React and the stylesheet twice. Its `src` is fixed
 *  at mount for that reason — React updating it would navigate the frame.
 *
 *  The frame sizes itself to what the document reports (src/preview.tsx):
 *  the demo at rest, and when a popup or dialog opens, the room it needs. */
/** The frame's document is one brand's; switching brands on the same page
 *  must load the other brand's document, so the frame is keyed by brand
 *  and mounts afresh rather than being told to show a demo it cannot. */
export function DemoFrame(props: React.ComponentProps<typeof Frame>) {
  return <Frame key={props.pkg} {...props} />;
}

function Frame({
  pkg,
  slug,
  index,
  thumb = false,
  min = 96,
  width,
}: {
  pkg: PkgId;
  slug: string;
  index: number;
  /** Inert and centred: a card's preview, not a page's demo. */
  thumb?: boolean;
  /** The least height the frame takes, in px; a block gets a screen's worth. */
  min?: number;
  /** A fixed width in px, for looking at a block as a tablet or a phone
   *  would; the full width otherwise. */
  width?: number;
}) {
  const id = `${pkg}/${slug}/${index}`;
  const frame = React.useRef<HTMLIFrameElement>(null);
  const [ready, setReady] = React.useState(false);
  const [height, setHeight] = React.useState(min);
  const [src] = React.useState(
    () => `${import.meta.env.BASE_URL}preview-${pkg}.html?pkg=${pkg}&slug=${slug}&i=${index}${thumb ? "&thumb=1" : ""}`,
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
      className={`block max-w-full border-0 transition-[height,width] duration-150 ${thumb ? "pointer-events-none" : ""}`}
      style={{ height, width: width ?? "100%" }}
      tabIndex={thumb ? -1 : undefined}
      aria-hidden={thumb || undefined}
    />
  );
}
