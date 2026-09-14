import { Button, Field, FieldDescription, FieldGroup, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";

export default function InputFieldGroup() {
  return (
    <FieldGroup className="w-80">
      <Field>
        <FieldLabel htmlFor="field-group-company">Company</FieldLabel>
        <Input id="field-group-company" placeholder="Strandbad Türlersee AG" />
      </Field>
      <Field>
        <FieldLabel htmlFor="field-group-email">E-mail</FieldLabel>
        <Input id="field-group-email" type="email" placeholder="info@tuerlersee.ch" />
        <FieldDescription>We answer here, usually within a working day.</FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit">Send</Button>
      </Field>
    </FieldGroup>
  );
}
