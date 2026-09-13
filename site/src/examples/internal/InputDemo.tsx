import { Field, FieldDescription, FieldLabel, Input } from "@ovadev-gmbh/ui-internal";

export default function InputDemo() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="input-demo-domain">Custom domain</FieldLabel>
      <Input id="input-demo-domain" placeholder="status.acme.ch" autoComplete="off" spellCheck={false} />
      <FieldDescription>Point a CNAME at edge.ch-zrh-1.ova.dev before you save.</FieldDescription>
    </Field>
  );
}
