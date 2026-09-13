import { Field, FieldContent, FieldError, FieldLabel, Switch } from "@ovadev-gmbh/ui-januna";

export default function SwitchInvalid() {
  return (
    <Field orientation="horizontal" data-invalid className="w-full max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-invalid-dietary">Ask guests for dietary notes</FieldLabel>
        <FieldError>The tasting menu on Friday cannot be booked without it.</FieldError>
      </FieldContent>
      <Switch id="switch-invalid-dietary" aria-invalid />
    </Field>
  );
}
