import { Badge, Field, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";

export default function InputBadge() {
  return (
    <Field className="w-80">
      <FieldLabel htmlFor="input-badge-webhook">
        Webhook URL
        <Badge variant="secondary">Beta</Badge>
      </FieldLabel>
      <Input id="input-badge-webhook" type="url" placeholder="https://hooks.acme.ch/billing" />
    </Field>
  );
}
