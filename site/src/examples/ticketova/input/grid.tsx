import { Field, FieldGroup, FieldLabel, Input } from "@ovadev-gmbh/ui-ticketova";

export default function InputGrid() {
  return (
    <FieldGroup className="grid w-96 grid-cols-[8rem_1fr]">
      <Field>
        <FieldLabel htmlFor="input-grid-postcode">Postcode</FieldLabel>
        <Input id="input-grid-postcode" inputMode="numeric" placeholder="8001" />
      </Field>
      <Field>
        <FieldLabel htmlFor="input-grid-city">City</FieldLabel>
        <Input id="input-grid-city" placeholder="Zürich" />
      </Field>
    </FieldGroup>
  );
}
