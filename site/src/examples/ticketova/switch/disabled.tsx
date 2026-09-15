import { Field, FieldContent, FieldDescription, FieldLabel, Switch } from "@ovadev-gmbh/ui-ticketova";

export default function SwitchDisabled() {
  return (
    <Field orientation="horizontal" data-disabled className="w-full max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-disabled-sso">Enforce single sign-on</FieldLabel>
        <FieldDescription>Available on the Scale plan. bergwerk-ag is on Team.</FieldDescription>
      </FieldContent>
      <Switch id="switch-disabled-sso" disabled />
    </Field>
  );
}
