import * as React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@ovadev-gmbh/ui-ovadev";

const pageCount = 12;

/* The first and last page, and the current one with its neighbours. */
function visiblePages(page: number) {
  const pages = new Set([1, page - 1, page, page + 1, pageCount]);
  return [...pages].filter((p) => p >= 1 && p <= pageCount).sort((a, b) => a - b);
}

export default function PaginationControlled() {
  const [page, setPage] = React.useState(4);

  const go = (next: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setPage(Math.min(pageCount, Math.max(1, next)));
  };

  const pages = visiblePages(page);

  return (
    <div className="flex flex-col items-center gap-3">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`#page-${page - 1}`} onClick={go(page - 1)} />
          </PaginationItem>
          {pages.map((p, i) => (
            <React.Fragment key={p}>
              {i > 0 && p - pages[i - 1]! > 1 ? (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : null}
              <PaginationItem>
                <PaginationLink href={`#page-${p}`} isActive={p === page} onClick={go(p)}>
                  {p}
                </PaginationLink>
              </PaginationItem>
            </React.Fragment>
          ))}
          <PaginationItem>
            <PaginationNext href={`#page-${page + 1}`} onClick={go(page + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <span className="text-label-13 text-content-secondary">
        Deployments, page <span className="text-label-13-mono">{page}</span> of{" "}
        <span className="text-label-13-mono">{pageCount}</span>
      </span>
    </div>
  );
}
