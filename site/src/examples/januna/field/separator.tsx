import { Field, FieldGroup, FieldLabel, FieldSeparator, Input } from "@ovadev-gmbh/ui-januna";

export default function FieldWithSeparator() {
  return (
    <FieldGroup className="w-80">
      <Field>
        <FieldLabel htmlFor="field-separator-name">Find the booking by name</FieldLabel>
        <Input id="field-separator-name" placeholder="Meier" />
      </Field>
      <FieldSeparator>or</FieldSeparator>
      <Field>
        <FieldLabel htmlFor="field-separator-phone">By the guest's phone</FieldLabel>
        <Input id="field-separator-phone" type="tel" placeholder="+41 79 123 45 67" />
      </Field>
    </FieldGroup>
  );
}
