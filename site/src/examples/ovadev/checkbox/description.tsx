import { Checkbox, Field, FieldContent, FieldDescription, FieldLabel } from "@ovadev-gmbh/ui-ovadev";

export default function CheckboxWithDescription() {
  return (
    <Field orientation="horizontal" className="w-96">
      <Checkbox id="checkbox-description-suspend" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="checkbox-description-suspend">Suspend on overdue invoices</FieldLabel>
        <FieldDescription>
          acme-logistics is suspended 14 days after an invoice falls due, until it is paid.
        </FieldDescription>
      </FieldContent>
    </Field>
  );
}
