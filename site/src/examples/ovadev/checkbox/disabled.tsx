import { Checkbox, Field, FieldGroup, FieldLabel } from "@ovadev-gmbh/ui-ovadev";

export default function CheckboxDisabled() {
  return (
    <FieldGroup data-slot="checkbox-group" className="w-80">
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="checkbox-disabled-email" defaultChecked disabled />
        <FieldLabel htmlFor="checkbox-disabled-email">Send invoices by e-mail</FieldLabel>
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="checkbox-disabled-debit" disabled />
        <FieldLabel htmlFor="checkbox-disabled-debit">Pay by direct debit (Scale only)</FieldLabel>
      </Field>
    </FieldGroup>
  );
}
