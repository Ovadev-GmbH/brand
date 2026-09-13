import { Field, FieldError, FieldLabel, Input } from "@ovadev-gmbh/ui-internal";

// The shape a form library reports; the repeated message is shown once.
const errors = [
  { message: "Use lowercase letters, digits and hyphens only." },
  { message: "Keep it to 32 characters or fewer." },
  { message: "Use lowercase letters, digits and hyphens only." },
];

export default function FieldErrors() {
  return (
    <Field data-invalid className="w-80">
      <FieldLabel htmlFor="field-errors-slug">Tenant slug</FieldLabel>
      <Input
        id="field-errors-slug"
        className="text-label-13-mono"
        defaultValue="Bergwerk_AG_Produktion_Zuerich_2026"
        aria-invalid
      />
      <FieldError errors={errors} />
    </Field>
  );
}
