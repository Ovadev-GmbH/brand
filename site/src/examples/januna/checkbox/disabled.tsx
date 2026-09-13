import { Checkbox, Field, FieldContent, FieldDescription, FieldGroup, FieldLabel } from "@ovadev-gmbh/ui-januna";

export default function CheckboxDisabled() {
  return (
    <FieldGroup data-slot="checkbox-group" className="w-96">
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="checkbox-disabled-confirmation" defaultChecked disabled />
        <FieldLabel htmlFor="checkbox-disabled-confirmation">Send the guest a confirmation</FieldLabel>
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="checkbox-disabled-card" disabled />
        <FieldContent>
          <FieldLabel htmlFor="checkbox-disabled-card">Take the deposit by card</FieldLabel>
          <FieldDescription>Connect a payment account in Settings first.</FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  );
}
