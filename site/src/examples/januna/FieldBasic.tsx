import { Field } from "@ovadev-gmbh/ui-januna";

export default function FieldBasic() {
  return (
    <Field.Root>
      <Field.Label>Name</Field.Label>
      <Field.Control required placeholder="Required" />

      <Field.Error match="valueMissing">
        Please enter your name
      </Field.Error>

      <Field.Description>Visible on your profile</Field.Description>
    </Field.Root>
  );
}
