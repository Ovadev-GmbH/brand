import {
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Switch,
} from "@ovadev-gmbh/ui-januna";

export default function FieldOrientation() {
  return (
    <FieldGroup className="w-96">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="field-orientation-walk-ins">Take walk-ins</FieldLabel>
          <FieldDescription>The lectern lists walk-ins beside tonight's bookings.</FieldDescription>
        </FieldContent>
        <Switch id="field-orientation-walk-ins" defaultChecked />
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="field-orientation-ready" defaultChecked />
        <FieldLabel htmlFor="field-orientation-ready">Text the guest when the table is ready</FieldLabel>
      </Field>
    </FieldGroup>
  );
}
