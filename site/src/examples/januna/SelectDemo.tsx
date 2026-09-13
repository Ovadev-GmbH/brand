import {
  Field,
  FieldLabel,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ovadev-gmbh/ui-januna";

const tables = [
  { label: "T4 · 2 seats", value: "t4" },
  { label: "T8 · 4 seats", value: "t8" },
  { label: "T12 · 6 seats", value: "t12" },
  { label: "T14 · 8 seats", value: "t14" },
];

export default function SelectDemo() {
  return (
    <Field className="w-full max-w-56">
      <FieldLabel htmlFor="select-table">Table</FieldLabel>
      <Select items={tables}>
        <SelectTrigger id="select-table" className="w-full">
          <SelectValue placeholder="Choose a table" />
        </SelectTrigger>
        <SelectContent>
          {tables.map((table) => (
            <SelectItem key={table.value} value={table.value}>
              {table.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
}
