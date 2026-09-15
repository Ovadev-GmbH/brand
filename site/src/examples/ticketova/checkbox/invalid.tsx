import { Checkbox, Field, FieldContent, FieldError, FieldLabel } from "@ovadev-gmbh/ui-ticketova";

export default function CheckboxInvalid() {
  return (
    <Field orientation="horizontal" data-invalid className="w-96">
      <Checkbox id="checkbox-invalid-dpa" aria-invalid />
      <FieldContent>
        <FieldLabel htmlFor="checkbox-invalid-dpa">Accept the data processing agreement</FieldLabel>
        <FieldError>helvetia-labs cannot go live on ch-zrh-1 without it.</FieldError>
      </FieldContent>
    </Field>
  );
}
