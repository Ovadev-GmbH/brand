import * as React from "react";
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarMenu, MenubarTrigger } from "@ovadev-gmbh/ui-januna";

const columns = [
  { key: "party", label: "Party" },
  { key: "table", label: "Table" },
  { key: "deposit", label: "Deposit (CHF)" },
  { key: "notes", label: "Notes" },
];

export default function MenubarCheckbox() {
  const [visible, setVisible] = React.useState<Record<string, boolean>>({
    party: true,
    table: true,
    deposit: false,
    notes: true,
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
      <span className="text-label-14 text-content-secondary">
        {columns
          .filter((c) => visible[c.key])
          .map((c) => c.label)
          .join(", ")}
      </span>
    </div>
  );
}
