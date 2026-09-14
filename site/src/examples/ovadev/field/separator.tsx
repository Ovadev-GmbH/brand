import { Field, FieldGroup, FieldLabel, FieldSeparator, Input } from "@ovadev-gmbh/ui-ovadev";

export default function FieldWithSeparator() {
  return (
    <FieldGroup className="w-80">
      <Field>
        <FieldLabel htmlFor="field-separator-email">Get the press kit by e-mail</FieldLabel>
        <Input id="field-separator-email" type="email" placeholder="name@example.ch" />
      </Field>
      <FieldSeparator>or</FieldSeparator>
      <Field>
        <FieldLabel htmlFor="field-separator-link">Download it directly</FieldLabel>
        <Input
          id="field-separator-link"
          className="text-label-13-mono"
          defaultValue="https://ova.dev/press/ovadev-press-kit.zip"
          readOnly
        />
      </Field>
    </FieldGroup>
  );
}
