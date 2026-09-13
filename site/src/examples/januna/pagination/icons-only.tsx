import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function PaginationIconsOnly() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#pagination-page-2" aria-label="Previous page">
            <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <span className="px-2 text-label-13 text-content-secondary">
            Page <span className="text-label-13-mono text-content-primary">3</span> of{" "}
            <span className="text-label-13-mono">24</span>
          </span>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#pagination-page-4" aria-label="Next page">
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
