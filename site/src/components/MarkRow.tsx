import * as React from "react";
import type { Mark } from "../brands";

/** The brand's marks, side by side and inert, as the Brand Assets card's
 *  preview. They are fetched rather than <img>-ed so they take the page's ink
 *  in either theme — the artwork paints itself in currentColor. */
export function MarkRow({ marks }: { marks: Mark[] }) {
  const [svgs, setSvgs] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    let alive = true;
    Promise.all(
      marks.map((m) =>
        fetch(`${import.meta.env.BASE_URL}brand/${m.file}.svg`)
          .then((r) => r.text())
          .then((t) => [m.file, t] as const)
          .catch(() => [m.file, ""] as const),
      ),
    ).then((pairs) => alive && setSvgs(Object.fromEntries(pairs)));
    return () => {
      alive = false;
    };
  }, [marks]);

  return (
    <div className="flex w-full items-center justify-center gap-8 text-gray-1000">
      {marks.map((m) => {
        const svg = svgs[m.file];
        if (!svg) return null;
        return (
          <div
            key={`${m.file}-${m.kind}`}
            className="flex h-12 items-center [&>svg]:h-full [&>svg]:w-auto"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        );
      })}
    </div>
  );
}
