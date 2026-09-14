import { Field, FieldDescription, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";

export default function InputRequired() {
  return (
    <Field className="w-72">
      <FieldLabel htmlFor="input-required-company">
        Company <span className="text-status-danger">*</span>
      </FieldLabel>
      <Input id="input-required-company" placeholder="Strandbad Türlersee AG" required />
      <FieldDescription>The legal name, as it appears on the quote.</FieldDescription>
    </Field>
  );
}
