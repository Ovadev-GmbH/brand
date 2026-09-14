import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Input,
} from "@ovadev-gmbh/ui-ovadev";

export default function FieldFieldSet() {
  return (
    <FieldSet className="w-96">
      <FieldLegend>Company address</FieldLegend>
      <FieldDescription>Printed in the imprint and on every quote.</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-set-street">Street</FieldLabel>
          <Input id="field-set-street" defaultValue="Sihlbruggstrasse 3" />
        </Field>
        <div className="grid grid-cols-[6rem_1fr] gap-4">
          <Field>
            <FieldLabel htmlFor="field-set-postcode">Postcode</FieldLabel>
            <Input id="field-set-postcode" className="text-label-13-mono" defaultValue="6340" />
          </Field>
          <Field>
            <FieldLabel htmlFor="field-set-city">City</FieldLabel>
            <Input id="field-set-city" defaultValue="Baar" />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  );
}
