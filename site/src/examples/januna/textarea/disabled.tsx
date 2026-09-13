import { Field, FieldDescription, FieldLabel, Textarea } from "@ovadev-gmbh/ui-januna";

export default function TextareaDisabled() {
  return (
    <Field data-disabled className="w-96">
      <FieldLabel htmlFor="textarea-disabled-policy">Cancellation policy</FieldLabel>
      <Textarea
        id="textarea-disabled-policy"
        defaultValue="Free of charge until 24 hours before the booking. After that, CHF 25.00 per guest."
        disabled
      />
      <FieldDescription>Set by the manager in the restaurant settings.</FieldDescription>
    </Field>
  );
}
