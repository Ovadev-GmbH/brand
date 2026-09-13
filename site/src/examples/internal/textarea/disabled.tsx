import { Field, FieldDescription, FieldLabel, Textarea } from "@ovadev-gmbh/ui-internal";

export default function TextareaDisabled() {
  return (
    <Field data-disabled className="w-96">
      <FieldLabel htmlFor="textarea-disabled-terms">Contract terms</FieldLabel>
      <Textarea
        id="textarea-disabled-terms"
        defaultValue="Scale plan, billed yearly. 99.95% availability for ch-zrh-1."
        disabled
      />
      <FieldDescription>Set in the contract with helvetia-labs; change it there.</FieldDescription>
    </Field>
  );
}
