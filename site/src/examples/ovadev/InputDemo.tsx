import { Field, FieldDescription, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";

export default function InputDemo() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="input-demo-domain">Company website</FieldLabel>
      <Input id="input-demo-domain" placeholder="www.tuerlersee.ch" autoComplete="off" spellCheck={false} />
      <FieldDescription>Optional. It helps us prepare before the first call.</FieldDescription>
    </Field>
  );
}
