import * as React from "react";
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarMenu, MenubarTrigger } from "@ovadev-gmbh/ui-ovadev";

const columns = [
  { key: "author", label: "Author" },
  { key: "language", label: "Language" },
  { key: "reading", label: "Reading time" },
  { key: "published", label: "Published" },
];

export default function MenubarCheckbox() {
  const [visible, setVisible] = React.useState<Record<string, boolean>>({
    author: true,
    language: false,
    reading: true,
    published: true,
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
