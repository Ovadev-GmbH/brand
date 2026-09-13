import { Button, Field, FieldDescription, FieldGroup, FieldLabel, Input } from "@ovadev-gmbh/ui-internal";

export default function InputFieldGroup() {
  return (
    <FieldGroup className="w-80">
      <Field>
        <FieldLabel htmlFor="field-group-company">Company</FieldLabel>
        <Input id="field-group-company" placeholder="Acme Logistics AG" />
      </Field>
      <Field>
        <FieldLabel htmlFor="field-group-email">Billing e-mail</FieldLabel>
        <Input id="field-group-email" type="email" placeholder="billing@acme.ch" />
        <FieldDescription>Invoices go here, not to the account owner.</FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit">Save</Button>
      </Field>
    </FieldGroup>
  );
}
