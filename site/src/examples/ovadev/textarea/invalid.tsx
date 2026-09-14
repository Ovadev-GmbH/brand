import { Field, FieldError, FieldLabel, Textarea } from "@ovadev-gmbh/ui-ovadev";

export default function TextareaInvalid() {
  return (
    <Field data-invalid className="w-96">
      <FieldLabel htmlFor="textarea-invalid-refund">Message</FieldLabel>
      <Textarea id="textarea-invalid-refund" defaultValue="hi" aria-invalid />
      <FieldError>Write at least 20 characters so we know what to answer.</FieldError>
    </Field>
  );
}
