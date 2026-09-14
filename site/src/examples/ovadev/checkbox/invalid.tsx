import { Checkbox, Field, FieldContent, FieldError, FieldLabel } from "@ovadev-gmbh/ui-ovadev";

export default function CheckboxInvalid() {
  return (
    <Field orientation="horizontal" data-invalid className="w-96">
      <Checkbox id="checkbox-invalid-dpa" aria-invalid />
      <FieldContent>
        <FieldLabel htmlFor="checkbox-invalid-dpa">Accept the privacy notice</FieldLabel>
        <FieldError>The contact form cannot be sent without it.</FieldError>
      </FieldContent>
    </Field>
  );
}
