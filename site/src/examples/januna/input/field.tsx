import { Field, FieldDescription, FieldLabel, Input } from "@ovadev-gmbh/ui-januna";

export default function InputField() {
  return (
    <Field className="w-80">
      <FieldLabel htmlFor="input-field-email">Guest e-mail</FieldLabel>
      <Input id="input-field-email" type="email" placeholder="lea.meier@example.ch" />
      <FieldDescription>The confirmation and the reminder go to this address.</FieldDescription>
    </Field>
  );
}
