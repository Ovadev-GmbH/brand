import { Checkbox, Field, FieldContent, FieldDescription, FieldLabel } from "@ovadev-gmbh/ui-ovadev";

export default function CheckboxWithDescription() {
  return (
    <Field orientation="horizontal" className="w-96">
      <Checkbox id="checkbox-description-suspend" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="checkbox-description-suspend">Product updates</FieldLabel>
        <FieldDescription>
          One e-mail when TICKETOVA or JANUNA ships a release, at most once a month.
        </FieldDescription>
      </FieldContent>
    </Field>
  );
}
