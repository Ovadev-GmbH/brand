import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Input,
} from "@ovadev-gmbh/ui-ticketova";

export default function FieldFieldSet() {
  return (
    <FieldSet className="w-96">
      <FieldLegend>Billing address</FieldLegend>
      <FieldDescription>Printed on every invoice for helvetia-labs.</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-set-street">Street</FieldLabel>
          <Input id="field-set-street" defaultValue="Bahnhofstrasse 12" />
        </Field>
        <div className="grid grid-cols-[6rem_1fr] gap-4">
          <Field>
            <FieldLabel htmlFor="field-set-postcode">Postcode</FieldLabel>
            <Input id="field-set-postcode" className="text-label-13-mono" defaultValue="8001" />
          </Field>
          <Field>
            <FieldLabel htmlFor="field-set-city">City</FieldLabel>
            <Input id="field-set-city" defaultValue="Zürich" />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  );
}
