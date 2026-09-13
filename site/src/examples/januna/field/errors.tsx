import { Field, FieldError, FieldLabel, Input } from "@ovadev-gmbh/ui-januna";

// The shape a form library reports; the repeated message is shown once.
const errors = [
  { message: "Start with the country code, as +41." },
  { message: "Use digits and spaces only." },
  { message: "Start with the country code, as +41." },
];

export default function FieldErrors() {
  return (
    <Field data-invalid className="w-80">
      <FieldLabel htmlFor="field-errors-phone">Guest phone</FieldLabel>
      <Input id="field-errors-phone" type="tel" defaultValue="079-123-45-67" aria-invalid />
      <FieldError errors={errors} />
    </Field>
  );
}
