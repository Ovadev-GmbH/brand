import { Field, FieldGroup, FieldLabel, FieldSeparator, Input } from "@ovadev-gmbh/ui-internal";

export default function FieldWithSeparator() {
  return (
    <FieldGroup className="w-80">
      <Field>
        <FieldLabel htmlFor="field-separator-email">Invite by e-mail</FieldLabel>
        <Input id="field-separator-email" type="email" placeholder="name@ova.dev" />
      </Field>
      <FieldSeparator>or</FieldSeparator>
      <Field>
        <FieldLabel htmlFor="field-separator-link">Share an invite link</FieldLabel>
        <Input
          id="field-separator-link"
          className="text-label-13-mono"
          defaultValue="https://intern.ova.dev/join/7kq2"
          readOnly
        />
      </Field>
    </FieldGroup>
  );
}
