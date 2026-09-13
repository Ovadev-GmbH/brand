import { Field, FieldDescription, FieldLabel, Input } from "@ovadev-gmbh/ui-internal";

export default function InputFile() {
  return (
    <Field className="w-72">
      <FieldLabel htmlFor="input-file-contract">Signed contract</FieldLabel>
      <Input id="input-file-contract" type="file" accept="application/pdf" />
      <FieldDescription>PDF, up to 10 MB.</FieldDescription>
    </Field>
  );
}
