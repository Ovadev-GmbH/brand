import { Field, FieldContent, FieldDescription, FieldLabel, Switch } from "@ovadev-gmbh/ui-ovadev";

export default function SwitchDescription() {
  return (
    <Field orientation="horizontal" className="w-full max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-description-previews">Preview deployments</FieldLabel>
        <FieldDescription>Every pull request against main gets its own URL on preview.ova.dev.</FieldDescription>
      </FieldContent>
      <Switch id="switch-description-previews" defaultChecked />
    </Field>
  );
}
