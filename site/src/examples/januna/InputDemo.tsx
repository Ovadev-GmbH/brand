import { Field, FieldDescription, FieldLabel, Input } from "@ovadev-gmbh/ui-januna";

export default function InputDemo() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="input-demo-phone">Phone number</FieldLabel>
      <Input id="input-demo-phone" type="tel" placeholder="+41 78 555 01 23" autoComplete="tel" />
      <FieldDescription>We send a text when the table is ready.</FieldDescription>
    </Field>
  );
}
