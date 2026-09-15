import { Field, FieldDescription, FieldLabel, Input } from "@ovadev-gmbh/ui-ticketova";

export default function InputField() {
  return (
    <Field className="w-72">
      <FieldLabel htmlFor="input-field-billing">Billing e-mail</FieldLabel>
      <Input id="input-field-billing" type="email" placeholder="billing@acme.ch" />
      <FieldDescription>Invoices and payment reminders go to this address.</FieldDescription>
    </Field>
  );
}
