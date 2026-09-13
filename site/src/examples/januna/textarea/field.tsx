import { Field, FieldDescription, FieldLabel, Textarea } from "@ovadev-gmbh/ui-januna";

export default function TextareaField() {
  return (
    <Field className="w-96">
      <FieldLabel htmlFor="textarea-field-requests">Special requests</FieldLabel>
      <Textarea id="textarea-field-requests" placeholder="A high chair, a quiet corner, a candle on the dessert" />
      <FieldDescription>Shown to the host at the lectern and on the booking card.</FieldDescription>
    </Field>
  );
}
