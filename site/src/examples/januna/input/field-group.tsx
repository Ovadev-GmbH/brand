import { Button, Field, FieldDescription, FieldGroup, FieldLabel, Input } from "@ovadev-gmbh/ui-januna";

export default function InputFieldGroup() {
  return (
    <FieldGroup className="w-80">
      <Field>
        <FieldLabel htmlFor="input-field-group-name">Guest name</FieldLabel>
        <Input id="input-field-group-name" placeholder="Lea Meier" />
      </Field>
      <Field>
        <FieldLabel htmlFor="input-field-group-phone">Phone</FieldLabel>
        <Input id="input-field-group-phone" type="tel" placeholder="+41 79 123 45 67" />
        <FieldDescription>The host calls this number when the party is late.</FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Button type="reset" variant="outline">
          Clear
        </Button>
        <Button type="submit">Save guest</Button>
      </Field>
    </FieldGroup>
  );
}
