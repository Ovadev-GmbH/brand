import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@ovadev-gmbh/ui-internal";

export default function PaginationPreviousNext() {
  return (
    <div className="flex w-full max-w-xl items-center justify-between gap-4">
      <span className="text-label-13 text-content-secondary">
        Invoices <span className="text-label-13-mono">51</span> to <span className="text-label-13-mono">100</span> of{" "}
        <span className="text-label-13-mono">1'204</span>
      </span>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#page-1" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#page-3" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
