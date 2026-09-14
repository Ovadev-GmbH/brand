import { Field, FieldDescription, FieldLabel, Textarea } from "@ovadev-gmbh/ui-ovadev";

export default function TextareaField() {
  return (
    <Field className="w-96">
      <FieldLabel htmlFor="textarea-field-reason">Message</FieldLabel>
      <Textarea id="textarea-field-reason" placeholder="We run an outdoor pool with about 60'000 visitors a season" />
      <FieldDescription>Goes to Philip, who answers within a working day.</FieldDescription>
    </Field>
  );
}
