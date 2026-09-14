import { Field, FieldContent, FieldError, FieldLabel, Switch } from "@ovadev-gmbh/ui-ovadev";

export default function SwitchInvalid() {
  return (
    <Field orientation="horizontal" data-invalid className="w-full max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-invalid-2fa">Two-factor authentication</FieldLabel>
        <FieldError>Owners of a Scale tenant must turn this on.</FieldError>
      </FieldContent>
      <Switch id="switch-invalid-2fa" aria-invalid />
    </Field>
  );
}
