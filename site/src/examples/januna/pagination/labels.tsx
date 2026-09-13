import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@ovadev-gmbh/ui-januna";

export default function PaginationLabels() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#pagination-newer" text="Newer" aria-label="Newer visits" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#pagination-older" text="Older" aria-label="Older visits" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
