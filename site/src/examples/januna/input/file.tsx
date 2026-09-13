import { Field, FieldDescription, FieldLabel, Input } from "@ovadev-gmbh/ui-januna";

export default function InputFile() {
  return (
    <Field className="w-80">
      <FieldLabel htmlFor="input-file-menu">Tonight's menu</FieldLabel>
      <Input id="input-file-menu" type="file" accept="application/pdf" />
      <FieldDescription>PDF, up to 10 MB. Guests see it with their confirmation.</FieldDescription>
    </Field>
  );
}
