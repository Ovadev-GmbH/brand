import { Checkbox, Field, FieldGroup, FieldLabel } from "@ovadev-gmbh/ui-ovadev";

export default function CheckboxDisabled() {
  return (
    <FieldGroup data-slot="checkbox-group" className="w-80">
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="checkbox-disabled-email" defaultChecked disabled />
        <FieldLabel htmlFor="checkbox-disabled-email">Blog posts by e-mail</FieldLabel>
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="checkbox-disabled-debit" disabled />
        <FieldLabel htmlFor="checkbox-disabled-debit">Early access to JANUNA (coming soon)</FieldLabel>
      </Field>
    </FieldGroup>
  );
}
