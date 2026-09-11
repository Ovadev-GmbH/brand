import * as React from "react";
import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@ovadev-gmbh/ui-januna";

const tables = [
  { label: "Table 1 · 2 seats", value: "t1" },
  { label: "Table 2 · 2 seats", value: "t2" },
  { label: "Table 5 · 4 seats", value: "t5" },
  { label: "Table 8 · 6 seats", value: "t8" },
  { label: "Table 12 · 10 seats", value: "t12", disabled: true },
];

const shifts = [
  { label: "Lunch", value: "lunch" },
  { label: "Dinner", value: "dinner" },
  { label: "Late night", value: "late" },
];

export default function SelectDemo() {
  const [table, setTable] = React.useState<string | null>(null);

  return (
    <div className="flex flex-wrap items-end gap-4">
      <div className="grid gap-2">
        <Label htmlFor="select-table">Table</Label>
        <Select items={tables} value={table} onValueChange={setTable}>
          <SelectTrigger id="select-table" className="w-56">
            <SelectValue placeholder="Pick a table" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Inside</SelectLabel>
              {tables.slice(0, 3).map((item) => (
                <SelectItem key={item.value} value={item.value} disabled={item.disabled}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Terrace</SelectLabel>
              {tables.slice(3).map((item) => (
                <SelectItem key={item.value} value={item.value} disabled={item.disabled}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="select-shift">Shift</Label>
        <Select items={shifts} defaultValue="dinner">
          <SelectTrigger id="select-shift" size="sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {shifts.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
