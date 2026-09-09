import { Link } from "react-router";
import type { Entry, PkgId } from "../types";
import { href } from "../registry";

/** A card in the package's index, in the shape the Geist introduction uses:
 *  the component itself on top, live and inert, and its name and one line
 *  pushed to the foot so every card's text sits on the same baseline however
 *  tall the preview is.
 *
 *  It draws no border of its own — it fills a cell of the hairline grid, and
 *  the grid's gaps are the rules. */
export function Thumb({ pkg, entry }: { pkg: PkgId; entry: Entry }) {
  const Demo = entry.examples[0]?.Component;
  return (
    <Link
      to={href(pkg, entry.slug)}
      className="group flex h-full flex-col gap-6 p-8 text-inherit no-underline transition-colors duration-150 hover:bg-alpha-100"
    >
      <div
        data-demo
        className="pointer-events-none flex min-h-24 select-none items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div className="max-w-full">{Demo ? <Demo /> : null}</div>
      </div>
      <div className="mt-auto">
        <p className="text-base font-semibold text-gray-1000">{entry.name}</p>
        <p className="mt-0.5 text-sm text-gray-900">{entry.summary}</p>
      </div>
    </Link>
  );
}
