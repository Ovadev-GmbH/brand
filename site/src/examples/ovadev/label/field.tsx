import { Field, FieldDescription, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";

export default function LabelInField() {
  return (
    <Field className="w-72">
      <FieldLabel htmlFor="label-field-manager">Account manager</FieldLabel>
      <Input id="label-field-manager" type="email" defaultValue="lea.meier@ova.dev" />
      <FieldDescription>Gets the renewal reminders for bergwerk-ag.</FieldDescription>
    </Field>
  );
}
