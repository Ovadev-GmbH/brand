import { Field, FieldError, FieldLabel, Textarea } from "@ovadev-gmbh/ui-internal";

export default function TextareaInvalid() {
  return (
    <Field data-invalid className="w-96">
      <FieldLabel htmlFor="textarea-invalid-refund">Reason for the refund</FieldLabel>
      <Textarea id="textarea-invalid-refund" defaultValue="n/a" aria-invalid />
      <FieldError>Write at least 20 characters. The reason is kept in the audit log.</FieldError>
    </Field>
  );
}
