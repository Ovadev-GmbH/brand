import * as React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@ovadev-gmbh/ui-januna";

const fields = [
  { value: "time", label: "Time" },
  { value: "party", label: "Party size" },
  { value: "table", label: "Table" },
];

export default function MenubarRadio() {
  const [field, setField] = React.useState("time");
  const [order, setOrder] = React.useState("asc");

  return (
    <div className="flex items-center gap-3">
      <Menubar className="w-max">
        <MenubarMenu>
          <MenubarTrigger>Sort</MenubarTrigger>
          <MenubarContent className="w-44">
            <MenubarGroup>
              <MenubarLabel inset>Sort by</MenubarLabel>
              <MenubarRadioGroup value={field} onValueChange={setField}>
                {fields.map((f) => (
                  <MenubarRadioItem key={f.value} value={f.value}>
                    {f.label}
                  </MenubarRadioItem>
                ))}
              </MenubarRadioGroup>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarLabel inset>Order</MenubarLabel>
              <MenubarRadioGroup value={order} onValueChange={setOrder}>
                <MenubarRadioItem value="asc">Ascending</MenubarRadioItem>
                <MenubarRadioItem value="desc">Descending</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <span className="text-label-14 text-content-secondary">
        {fields.find((f) => f.value === field)?.label}, {order === "asc" ? "ascending" : "descending"}
      </span>
    </div>
  );
}
