import { Field, FieldDescription, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";

export default function LabelInField() {
  return (
    <Field className="w-72">
      <FieldLabel htmlFor="label-field-manager">Your contact at Ovadev</FieldLabel>
      <Input id="label-field-manager" type="email" defaultValue="philip@ova.dev" />
      <FieldDescription>Answers the quote request for Strandbad Türlersee.</FieldDescription>
    </Field>
  );
}
