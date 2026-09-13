import { Field, FieldDescription, FieldLabel, Input } from "@ovadev-gmbh/ui-januna";

export default function InputRequired() {
  return (
    <Field className="w-80">
      <FieldLabel htmlFor="input-required-name">
        Name on booking <span className="text-status-danger">*</span>
      </FieldLabel>
      <Input id="input-required-name" placeholder="Meier" required />
      <FieldDescription>Printed on the door list the host reads at the lectern.</FieldDescription>
    </Field>
  );
}
