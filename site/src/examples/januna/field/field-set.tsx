import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Input,
} from "@ovadev-gmbh/ui-januna";

export default function FieldFieldSet() {
  return (
    <FieldSet className="w-96">
      <FieldLegend>Guest</FieldLegend>
      <FieldDescription>Saved with the booking and remembered for the next visit.</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-set-name">Name</FieldLabel>
          <Input id="field-set-name" defaultValue="Lea Meier" />
        </Field>
        <div className="grid grid-cols-[1fr_7rem] gap-4">
          <Field>
            <FieldLabel htmlFor="field-set-phone">Phone</FieldLabel>
            <Input id="field-set-phone" type="tel" defaultValue="+41 79 123 45 67" />
          </Field>
          <Field>
            <FieldLabel htmlFor="field-set-party">Party size</FieldLabel>
            <Input id="field-set-party" type="number" min={1} defaultValue={6} />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  );
}
