import * as React from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { FilterHorizontalIcon } from "@hugeicons/core-free-icons";

const columns = [
  { key: "party", label: "Party" },
  { key: "table", label: "Table" },
  { key: "deposit", label: "Deposit (CHF)" },
  { key: "notes", label: "Notes" },
];

export default function DropdownMenuCheckboxes() {
  const [visible, setVisible] = React.useState<Record<string, boolean>>({
    party: true,
    table: true,
    deposit: false,
    notes: true,
  });
  const shown = columns.filter((c) => visible[c.key]).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
        <HugeiconsIcon icon={FilterHorizontalIcon} strokeWidth={2} data-icon="inline-start" />
        Columns
        <span className="text-label-13-mono text-content-secondary">
          {shown}/{columns.length}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Visible columns</DropdownMenuLabel>
          {columns.map((column) => (
            <DropdownMenuCheckboxItem
              key={column.key}
              checked={visible[column.key]}
              onCheckedChange={(on) => setVisible((prev) => ({ ...prev, [column.key]: on }))}
            >
              {column.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
