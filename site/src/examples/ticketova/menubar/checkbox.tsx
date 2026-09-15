import * as React from "react";
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarMenu, MenubarTrigger } from "@ovadev-gmbh/ui-ticketova";

const columns = [
  { key: "plan", label: "Plan" },
  { key: "region", label: "Region" },
  { key: "seats", label: "Seats" },
  { key: "mrr", label: "MRR (CHF)" },
];

export default function MenubarCheckbox() {
  const [visible, setVisible] = React.useState<Record<string, boolean>>({
    plan: true,
    region: false,
    seats: true,
    mrr: true,
  });

  return (
    <div className="flex items-center gap-3">
      <Menubar className="w-max">
        <MenubarMenu>
          <MenubarTrigger>Columns</MenubarTrigger>
          <MenubarContent className="w-48">
            {columns.map((column) => (
              <MenubarCheckboxItem
                key={column.key}
                checked={visible[column.key]}
                onCheckedChange={(on) => setVisible((prev) => ({ ...prev, [column.key]: on }))}
              >
                {column.label}
              </MenubarCheckboxItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <span className="text-label-13 text-content-secondary">
        {columns
          .filter((c) => visible[c.key])
          .map((c) => c.label)
          .join(", ")}
      </span>
    </div>
  );
}
