import { Field, FieldDescription, FieldGroup, FieldLabel, Input, Switch } from "@ovadev-gmbh/ui-januna";

export default function FieldDisabled() {
  return (
    <FieldGroup className="w-80">
      <Field data-disabled>
        <FieldLabel htmlFor="field-disabled-shift">Shift</FieldLabel>
        <Input id="field-disabled-shift" defaultValue="Dinner" disabled />
        <FieldDescription>Set by the manager's week plan; change it there.</FieldDescription>
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Switch id="field-disabled-online" defaultChecked disabled />
        <FieldLabel htmlFor="field-disabled-online">Online booking</FieldLabel>
      </Field>
    </FieldGroup>
  );
}
