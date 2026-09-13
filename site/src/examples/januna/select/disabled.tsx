import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ovadev-gmbh/ui-januna";

const tables = [
  { label: "T4 · 2 seats", value: "t4" },
  { label: "T8 · 4 seats", value: "t8" },
  { label: "T12 · 6 seats", value: "t12" },
  { label: "Terrace 3 · closed", value: "terrace-3", disabled: true },
];

export default function SelectDisabled() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Select items={tables} defaultValue="t12" disabled>
        <SelectTrigger className="w-48" aria-label="Table, locked while the party is seated">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {tables.map((table) => (
            <SelectItem key={table.value} value={table.value}>
              {table.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select items={tables} defaultValue="t8">
        <SelectTrigger className="w-48" aria-label="Table">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {tables.map((table) => (
            <SelectItem key={table.value} value={table.value} disabled={table.disabled}>
              {table.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
