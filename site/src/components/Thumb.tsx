import { Link } from "react-router";
import type { Entry, Pkg } from "../types";
import { DemoFrame } from "./DemoFrame";
import { href } from "../registry";

/** A card in the package's index, in the shape the Geist introduction uses:
 *  the component itself on top, live and inert, and its name pushed to the
 *  foot so every card's name sits on the same baseline however tall the
 *  preview is.
 *
 *  It draws no border of its own — it fills a cell of the hairline grid, and
 *  the grid's gaps are the rules.
 *
 *  The link is an overlay rather than a wrapper: several of the previews are
 *  components that render an anchor of their own (PreviewCard, Toolbar.Link,
 *  NavigationMenu), and an <a> inside an <a> is not valid HTML. */
export function Thumb({ pkg, entry }: { pkg: Pkg; entry: Entry }) {
  const Demo = entry.examples[0]?.Component;
  return (
    <div className="group relative flex h-full flex-col gap-6 p-8 transition-colors duration-150 hover:bg-alpha-100">
      <div
        data-demo
        className="pointer-events-none flex min-h-24 select-none items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div className="w-full">
          {pkg.frame ? <DemoFrame pkg={pkg.id} slug={entry.slug} index={0} thumb /> : Demo ? <Demo /> : null}
        </div>
      </div>
      <div className="mt-auto">
        <p className="text-base font-semibold text-gray-1000">{entry.name}</p>
      </div>
      <Link to={href(pkg.id, entry.slug)} className="absolute inset-0" aria-label={entry.name} />
    </div>
  );
}
