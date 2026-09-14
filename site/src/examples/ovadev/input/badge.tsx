import { Badge, Field, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";

export default function InputBadge() {
  return (
    <Field className="w-80">
      <FieldLabel htmlFor="input-badge-webhook">
        Venue website
        <Badge variant="secondary">Optional</Badge>
      </FieldLabel>
      <Input id="input-badge-webhook" type="url" placeholder="https://www.tuerlersee.ch" />
    </Field>
  );
}
