import {
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Switch,
} from "@ovadev-gmbh/ui-ticketova";

export default function FieldOrientation() {
  return (
    <FieldGroup className="w-96">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="field-orientation-maintenance">Maintenance mode</FieldLabel>
          <FieldDescription>Requests to acme-logistics get a 503 until this is turned off.</FieldDescription>
        </FieldContent>
        <Switch id="field-orientation-maintenance" />
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="field-orientation-audit" defaultChecked />
        <FieldLabel htmlFor="field-orientation-audit">Write the change to the audit log</FieldLabel>
      </Field>
    </FieldGroup>
  );
}
