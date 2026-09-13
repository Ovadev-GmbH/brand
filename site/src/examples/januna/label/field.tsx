import { Field, FieldDescription, FieldLabel, Input } from "@ovadev-gmbh/ui-januna";

export default function LabelInField() {
  return (
    <Field className="w-80">
      <FieldLabel htmlFor="label-field-host">Host on duty</FieldLabel>
      <Input id="label-field-host" defaultValue="Lea Meier" />
      <FieldDescription>Gets the late-arrival alerts for tonight's dinner shift.</FieldDescription>
    </Field>
  );
}
