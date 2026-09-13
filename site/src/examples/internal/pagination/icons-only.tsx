import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@ovadev-gmbh/ui-internal";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function PaginationIconsOnly() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#page-2" aria-label="Previous page">
            <ChevronLeftIcon />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <span className="px-2 text-label-13 text-content-secondary">
            Page <span className="text-label-13-mono text-content-primary">3</span> of{" "}
            <span className="text-label-13-mono">24</span>
          </span>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#page-4" aria-label="Next page">
            <ChevronRightIcon />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
