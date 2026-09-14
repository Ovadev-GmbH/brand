import { Field, FieldDescription, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";

export default function InputField() {
  return (
    <Field className="w-72">
      <FieldLabel htmlFor="input-field-billing">E-mail</FieldLabel>
      <Input id="input-field-billing" type="email" placeholder="info@tuerlersee.ch" />
      <FieldDescription>The reply and the quote go to this address.</FieldDescription>
    </Field>
  );
}
