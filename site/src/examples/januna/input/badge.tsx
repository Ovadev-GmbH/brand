import { Badge, Field, FieldLabel, Input } from "@ovadev-gmbh/ui-januna";

export default function InputBadge() {
  return (
    <Field className="w-80">
      <FieldLabel htmlFor="input-badge-allergies">
        Allergies
        <Badge variant="secondary">New</Badge>
      </FieldLabel>
      <Input id="input-badge-allergies" placeholder="Nuts, shellfish, gluten" />
    </Field>
  );
}
