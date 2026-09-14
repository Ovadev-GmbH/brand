import {
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Switch,
} from "@ovadev-gmbh/ui-ovadev";

export default function FieldOrientation() {
  return (
    <FieldGroup className="w-96">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="field-orientation-maintenance">Maintenance notice</FieldLabel>
          <FieldDescription>Visitors to ova.dev see the notice until this is turned off.</FieldDescription>
        </FieldContent>
        <Switch id="field-orientation-maintenance" />
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="field-orientation-audit" defaultChecked />
        <FieldLabel htmlFor="field-orientation-audit">Post the notice on the status page too</FieldLabel>
      </Field>
    </FieldGroup>
  );
}
