import { Field, FieldError, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";

export default function InputInvalid() {
  return (
    <Field data-invalid className="w-72">
      <FieldLabel htmlFor="input-invalid-vat">Phone</FieldLabel>
      <Input id="input-invalid-vat" className="text-label-13-mono" defaultValue="041 5" aria-invalid />
      <FieldError>Enter the full number, as +41 41 000 00 00.</FieldError>
    </Field>
  );
}
