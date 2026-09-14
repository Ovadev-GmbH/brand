/* The two areas of a brand: the catalog (foundations and components, the
   docs) and the blocks (whole screens). One pair of links in the header,
   the current one in ink, so either area is one click from the other. */

import { Link } from "react-router";
import type { Pkg } from "../types";
import { href } from "../registry";

export function AreaNav({ pkg, area }: { pkg: Pkg; area: "docs" | "blocks" }) {
  const hasBlocks = pkg.entries.some((e) => e.kind === "block");
  if (!hasBlocks) return null;
  const cls = (active: boolean) =>
    `flex h-8 items-center rounded-brand px-3 text-[13px] no-underline ${active ? "bg-alpha-100 text-gray-1000" : "text-gray-900 hover:text-gray-1000"}`;
  return (
    <nav aria-label="Areas" className="flex shrink-0 items-center gap-1">
      <Link to={href(pkg.id)} className={cls(area === "docs")} aria-current={area === "docs" ? "page" : undefined}>
        Docs
      </Link>
      <Link to={`${href(pkg.id)}/blocks`} className={cls(area === "blocks")} aria-current={area === "blocks" ? "page" : undefined}>
        Blocks
      </Link>
    </nav>
  );
}
