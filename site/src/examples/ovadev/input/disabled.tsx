import { Field, FieldDescription, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";

export default function InputDisabled() {
  return (
    <Field data-disabled className="w-72">
      <FieldLabel htmlFor="input-disabled-id">Company register</FieldLabel>
      <Input id="input-disabled-id" className="text-label-13-mono" defaultValue="CHE-312.484.019" disabled />
      <FieldDescription>Assigned by the register in Zug; it never changes.</FieldDescription>
    </Field>
  );
}
