import { Field, FieldContent, FieldDescription, FieldLabel, Switch } from "@ovadev-gmbh/ui-januna";

export default function SwitchDisabled() {
  return (
    <Field orientation="horizontal" data-disabled className="w-full max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-disabled-card">Take deposits by card</FieldLabel>
        <FieldDescription>Connect a payment account in Settings first.</FieldDescription>
      </FieldContent>
      <Switch id="switch-disabled-card" disabled />
    </Field>
  );
}
