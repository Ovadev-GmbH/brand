import { Field, FieldError, FieldLabel, Input } from "@ovadev-gmbh/ui-internal";

export default function InputInvalid() {
  return (
    <Field data-invalid className="w-72">
      <FieldLabel htmlFor="input-invalid-vat">VAT number</FieldLabel>
      <Input id="input-invalid-vat" className="text-label-13-mono" defaultValue="CHE-123" aria-invalid />
      <FieldError>Enter the full number, as CHE-123.456.789.</FieldError>
    </Field>
  );
}
