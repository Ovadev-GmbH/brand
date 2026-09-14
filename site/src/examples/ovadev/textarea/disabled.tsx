import { Field, FieldDescription, FieldLabel, Textarea } from "@ovadev-gmbh/ui-ovadev";

export default function TextareaDisabled() {
  return (
    <Field data-disabled className="w-96">
      <FieldLabel htmlFor="textarea-disabled-terms">Imprint</FieldLabel>
      <Textarea
        id="textarea-disabled-terms"
        defaultValue="Ovadev GmbH, Baar ZG. CHE-312.484.019. Managing directors: Beni, Robin."
        disabled
      />
      <FieldDescription>Set from the commercial register; change it there.</FieldDescription>
    </Field>
  );
}
