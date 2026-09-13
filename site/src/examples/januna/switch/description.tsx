import { Field, FieldContent, FieldDescription, FieldLabel, Switch } from "@ovadev-gmbh/ui-januna";

export default function SwitchDescription() {
  return (
    <Field orientation="horizontal" className="w-full max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-description-waitlist">Waitlist when a shift is full</FieldLabel>
        <FieldDescription>Guests leave a phone number and get a text when a table frees up.</FieldDescription>
      </FieldContent>
      <Switch id="switch-description-waitlist" defaultChecked />
    </Field>
  );
}
