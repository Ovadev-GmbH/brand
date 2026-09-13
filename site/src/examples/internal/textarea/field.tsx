import { Field, FieldDescription, FieldLabel, Textarea } from "@ovadev-gmbh/ui-internal";

export default function TextareaField() {
  return (
    <Field className="w-96">
      <FieldLabel htmlFor="textarea-field-reason">Reason for the credit note</FieldLabel>
      <Textarea id="textarea-field-reason" placeholder="Charged twice for September on INV-2026-0142" />
      <FieldDescription>Printed on the credit note sent to acme-logistics.</FieldDescription>
    </Field>
  );
}
