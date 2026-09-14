import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";

export default function FieldResponsive() {
  return (
    <FieldGroup className="w-full max-w-xl">
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="field-responsive-name">Display name</FieldLabel>
          <FieldDescription>Shown in the tenant switcher.</FieldDescription>
        </FieldContent>
        <Input id="field-responsive-name" defaultValue="Bergwerk AG" />
      </Field>
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="field-responsive-email">Billing e-mail</FieldLabel>
          <FieldDescription>Invoices go here, not to the owner.</FieldDescription>
        </FieldContent>
        <Input id="field-responsive-email" type="email" defaultValue="finance@bergwerk.ch" />
      </Field>
    </FieldGroup>
  );
}
