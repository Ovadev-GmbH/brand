import { Field, FieldDescription, FieldGroup, FieldLabel, Input, Switch } from "@ovadev-gmbh/ui-ovadev";

export default function FieldDisabled() {
  return (
    <FieldGroup className="w-80">
      <Field data-disabled>
        <FieldLabel htmlFor="field-disabled-plan">Plan</FieldLabel>
        <Input id="field-disabled-plan" defaultValue="Venue" disabled />
        <FieldDescription>Set by the contract; Philip changes it.</FieldDescription>
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Switch id="field-disabled-sso" defaultChecked disabled />
        <FieldLabel htmlFor="field-disabled-sso">Real-time reporting</FieldLabel>
      </Field>
    </FieldGroup>
  );
}
