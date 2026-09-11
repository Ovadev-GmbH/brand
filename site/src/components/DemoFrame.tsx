import * as React from "react";
import type { PkgId } from "../types";

/** A demo from a Tailwind package, embedded from preview.html. The frame
 *  sizes itself to what the document inside reports (src/preview.tsx), so a
 *  demo that opens a popup grows the frame rather than clipping it.
 *
 *  `tall` gives overlays room to open in: a dialog centres itself in the
 *  frame's viewport, and a frame the height of its trigger has none. */
export function DemoFrame({
  pkg,
  slug,
  index,
  thumb = false,
  tall = false,
}: {
  pkg: PkgId;
  slug: string;
  index: number;
  thumb?: boolean;
  tall?: boolean;
}) {
  const id = `${pkg}/${slug}/${index}`;
  const min = thumb ? 96 : tall ? 480 : 96;
  const [height, setHeight] = React.useState(min);
  React.useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.data?.type === "demo-height" && e.data.id === id) setHeight(Math.max(min, e.data.height));
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [id, min]);
  const src = `${import.meta.env.BASE_URL}preview.html?pkg=${pkg}&slug=${slug}&i=${index}${thumb ? "&thumb=1" : ""}`;
  return (
    <iframe
      src={src}
      title={`${slug} demo`}
      loading="lazy"
      className={`block w-full border-0 ${thumb ? "pointer-events-none" : ""}`}
      style={{ height }}
      tabIndex={thumb ? -1 : undefined}
      aria-hidden={thumb || undefined}
    />
  );
}
