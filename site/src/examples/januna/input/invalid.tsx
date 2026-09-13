import { Field, FieldError, FieldLabel, Input } from "@ovadev-gmbh/ui-januna";

export default function InputInvalid() {
  return (
    <Field data-invalid className="w-80">
      <FieldLabel htmlFor="input-invalid-phone">Phone</FieldLabel>
      <Input id="input-invalid-phone" type="tel" defaultValue="079 123" aria-invalid />
      <FieldError>Enter the full number, as +41 79 123 45 67.</FieldError>
    </Field>
  );
}
