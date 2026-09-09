/* Prev/Next across the brand's own pages, in the sidebar's order. The
   chevron sits outside the title rather than in the line with it, so the
   titles stay flush with the column they belong to. */

import { Link } from "react-router";
import type { NavItem } from "../nav";
import { ChevronIcon } from "./icons";

const LINK = "group flex flex-col rounded-brand p-1 no-underline";
const KIND = "text-[13px] text-gray-900 transition-colors duration-200 group-hover:text-gray-1000";
const TITLE = "relative block text-base leading-6 font-medium text-gray-1000 group-hover:text-accent";
const CHEV = "absolute top-0.5 flex text-gray-900 transition-colors duration-200 group-hover:text-gray-1000";

export function Pagination({ prev, next }: { prev?: NavItem; next?: NavItem }) {
  if (!prev && !next) return null;
  return (
    <nav
      className="flex flex-wrap justify-between gap-4 border-t border-alpha-400 px-6 pt-8 pb-10 lg:px-12"
      aria-label="Pagination"
    >
      {prev ? (
        <Link className={`${LINK} pl-7`} to={prev.href} aria-label={`Go to previous page: ${prev.name}`}>
          <span className={KIND}>Previous</span>
          <span className={TITLE}>
            <span className={`${CHEV} -left-[26px] rotate-180`} aria-hidden="true">
              <ChevronIcon size={20} />
            </span>
            {prev.name}
          </span>
        </Link>
      ) : null}
      {next ? (
        <Link className={`${LINK} ml-auto pr-7 text-right`} to={next.href} aria-label={`Go to next page: ${next.name}`}>
          <span className={KIND}>Next</span>
          <span className={TITLE}>
            {next.name}
            <span className={`${CHEV} -right-[26px]`} aria-hidden="true">
              <ChevronIcon size={20} />
            </span>
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
