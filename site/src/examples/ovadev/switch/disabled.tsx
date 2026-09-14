import { Field, FieldContent, FieldDescription, FieldLabel, Switch } from "@ovadev-gmbh/ui-ovadev";

export default function SwitchDisabled() {
  return (
    <Field orientation="horizontal" data-disabled className="w-full max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-disabled-sso">JANUNA sign-up</FieldLabel>
        <FieldDescription>Opens when JANUNA leaves early access. Until then the form stays closed.</FieldDescription>
      </FieldContent>
      <Switch id="switch-disabled-sso" disabled />
    </Field>
  );
}
