import * as React from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-internal";
import { Columns3Icon } from "lucide-react";

const columns = [
  { key: "plan", label: "Plan" },
  { key: "region", label: "Region" },
  { key: "seats", label: "Seats" },
  { key: "mrr", label: "MRR (CHF)" },
];

export default function DropdownMenuCheckboxes() {
  const [visible, setVisible] = React.useState<Record<string, boolean>>({
    plan: true,
    region: true,
    seats: false,
    mrr: true,
  });
  const shown = columns.filter((c) => visible[c.key]).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
        <Columns3Icon data-icon="inline-start" />
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
