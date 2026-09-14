import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@ovadev-gmbh/ui-ovadev";

export default function PaginationLabels() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#audit-newer" text="Newer" aria-label="Newer audit events" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#audit-older" text="Older" aria-label="Older audit events" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
