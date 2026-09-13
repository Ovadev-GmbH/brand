import {
  Field,
  FieldError,
  FieldLabel,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ovadev-gmbh/ui-januna";

const tables = [
  { label: "T8 · 4 seats", value: "t8" },
  { label: "T12 · 6 seats", value: "t12" },
  { label: "T14 · 8 seats", value: "t14" },
];

export default function SelectInvalid() {
  return (
    <Field data-invalid className="w-64">
      <FieldLabel htmlFor="select-invalid-table">Table</FieldLabel>
      <Select items={tables}>
        <SelectTrigger id="select-invalid-table" className="w-full" aria-invalid>
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
      <FieldError>Choose a table before confirming the booking.</FieldError>
    </Field>
  );
}
