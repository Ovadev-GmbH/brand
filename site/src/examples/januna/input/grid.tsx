import { Field, FieldGroup, FieldLabel, Input } from "@ovadev-gmbh/ui-januna";

export default function InputGrid() {
  return (
    <FieldGroup className="grid w-96 grid-cols-[7rem_1fr] gap-4">
      <Field>
        <FieldLabel htmlFor="input-grid-party">Party size</FieldLabel>
        <Input id="input-grid-party" inputMode="numeric" placeholder="6" />
      </Field>
      <Field>
        <FieldLabel htmlFor="input-grid-name">Name on booking</FieldLabel>
        <Input id="input-grid-name" placeholder="Meier" />
      </Field>
    </FieldGroup>
  );
}
