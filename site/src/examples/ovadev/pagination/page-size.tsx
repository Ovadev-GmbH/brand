import * as React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ovadev-gmbh/ui-ovadev";

const sizes = [
  { label: "25", value: "25" },
  { label: "50", value: "50" },
  { label: "100", value: "100" },
];

const total = 1204;
const int = new Intl.NumberFormat("en-US");

export default function PaginationPageSize() {
  const [size, setSize] = React.useState<string | null>("50");
  const perPage = Number(size ?? 50);

  return (
    <div className="flex w-full max-w-xl flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <label htmlFor="pagination-page-size" className="text-label-13 text-content-secondary">
          Rows per page
        </label>
        <Select items={sizes} value={size} onValueChange={setSize}>
          <SelectTrigger id="pagination-page-size" size="sm" className="w-20 text-label-13-mono">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                <span className="text-label-13-mono">{s.label}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-label-13-mono text-content-secondary">
          1 to {int.format(perPage)} of {int.format(total)}
        </span>
        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious aria-disabled="true" tabIndex={-1} className="pointer-events-none text-content-disabled" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#page-2" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
