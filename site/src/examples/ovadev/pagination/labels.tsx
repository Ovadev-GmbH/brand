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
          <PaginationPrevious href="#posts-newer" text="Newer" aria-label="Newer posts" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#posts-older" text="Older" aria-label="Older posts" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
