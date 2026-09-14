import { Field, FieldContent, FieldDescription, FieldLabel, Switch } from "@ovadev-gmbh/ui-ovadev";

export default function SwitchDescription() {
  return (
    <Field orientation="horizontal" className="w-full max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-description-previews">Page view counts</FieldLabel>
        <FieldDescription>Counts visits to ova.dev without cookies. Off means nothing is counted.</FieldDescription>
      </FieldContent>
      <Switch id="switch-description-previews" defaultChecked />
    </Field>
  );
}
