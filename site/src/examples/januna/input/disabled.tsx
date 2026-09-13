import { Field, FieldDescription, FieldLabel, Input } from "@ovadev-gmbh/ui-januna";

export default function InputDisabled() {
  return (
    <Field data-disabled className="w-80">
      <FieldLabel htmlFor="input-disabled-table">Table</FieldLabel>
      <Input id="input-disabled-table" defaultValue="T12" disabled />
      <FieldDescription>Assigned by the floor plan. Move the booking to change it.</FieldDescription>
    </Field>
  );
}
