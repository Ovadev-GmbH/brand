import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";

export default function FieldResponsive() {
  return (
    <FieldGroup className="w-full max-w-xl">
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="field-responsive-name">Company</FieldLabel>
          <FieldDescription>Shown on the quote and the contract.</FieldDescription>
        </FieldContent>
        <Input id="field-responsive-name" defaultValue="Gemeinde Hausen am Albis" />
      </Field>
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="field-responsive-email">Billing e-mail</FieldLabel>
          <FieldDescription>Quotes go here, not to the contact person.</FieldDescription>
        </FieldContent>
        <Input id="field-responsive-email" type="email" defaultValue="finanzen@hausen.ch" />
      </Field>
    </FieldGroup>
  );
}
