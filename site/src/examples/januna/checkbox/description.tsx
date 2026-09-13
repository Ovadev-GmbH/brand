import { Checkbox, Field, FieldContent, FieldDescription, FieldLabel } from "@ovadev-gmbh/ui-januna";

export default function CheckboxWithDescription() {
  return (
    <Field orientation="horizontal" className="w-96">
      <Checkbox id="checkbox-description-waitlist" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="checkbox-description-waitlist">Offer late tables to the waitlist</FieldLabel>
        <FieldDescription>
          When a booking is 15 minutes late, the host is offered the next party on the waitlist.
        </FieldDescription>
      </FieldContent>
    </Field>
  );
}
