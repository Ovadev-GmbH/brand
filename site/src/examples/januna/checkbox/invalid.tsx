import { Checkbox, Field, FieldContent, FieldError, FieldLabel } from "@ovadev-gmbh/ui-januna";

export default function CheckboxInvalid() {
  return (
    <Field orientation="horizontal" data-invalid className="w-96">
      <Checkbox id="checkbox-invalid-deposit" aria-invalid />
      <FieldContent>
        <FieldLabel htmlFor="checkbox-invalid-deposit">The guest agreed to the deposit</FieldLabel>
        <FieldError>
          A party of 10 pays <span className="text-label-13-mono">CHF 500.00</span> before the booking is confirmed.
        </FieldError>
      </FieldContent>
    </Field>
  );
}
