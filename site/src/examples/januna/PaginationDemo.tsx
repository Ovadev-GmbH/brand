import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@ovadev-gmbh/ui-januna";

const pages = [1, 2, 3];
const lastPage = 12;

export default function PaginationDemo() {
  const [page, setPage] = useState(2);

  const go = (target: number) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setPage(Math.min(Math.max(target, 1), lastPage));
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={go(page - 1)} />
        </PaginationItem>
        {pages.map((n) => (
          <PaginationItem key={n}>
            <PaginationLink href="#" isActive={page === n} onClick={go(n)}>
              {n}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive={page === lastPage} onClick={go(lastPage)}>
            {lastPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" onClick={go(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
