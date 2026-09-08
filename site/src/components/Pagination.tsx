/* Prev/Next across the brand's own pages, in the sidebar's order. The
   chevron sits outside the title rather than in the line with it, so the
   titles stay flush with the column they belong to. */

import { Link } from "react-router";
import type { NavItem } from "../nav";
import { ChevronIcon } from "./icons";

export function Pagination({ prev, next }: { prev?: NavItem; next?: NavItem }) {
  if (!prev && !next) return null;
  return (
    <nav className="g-pager" aria-label="Pagination">
      {prev ? (
        <Link className="g-pager__link g-pager__link--prev" to={prev.href} aria-label={`Go to previous page: ${prev.name}`}>
          <span className="g-pager__kind">Previous</span>
          <span className="g-pager__title">
            <span className="g-pager__chev g-pager__chev--prev" aria-hidden="true">
              <ChevronIcon size={20} />
            </span>
            {prev.name}
          </span>
        </Link>
      ) : null}
      {next ? (
        <Link className="g-pager__link g-pager__link--next" to={next.href} aria-label={`Go to next page: ${next.name}`}>
          <span className="g-pager__kind">Next</span>
          <span className="g-pager__title">
            {next.name}
            <span className="g-pager__chev g-pager__chev--next" aria-hidden="true">
              <ChevronIcon size={20} />
            </span>
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
