import { Checkbox, Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@ovadev-gmbh/ui-ovadev";

const recipients = [
  { id: "oncall", label: "Robin", on: true },
  { id: "ops", label: "ops@ova.dev", on: true },
  { id: "owner", label: "Customer contacts", on: false },
];

export default function CheckboxGroup() {
  return (
    <FieldSet className="w-72">
      <FieldLegend variant="label">Notify when a service on ova.dev goes down</FieldLegend>
      <FieldGroup data-slot="checkbox-group">
        {recipients.map((recipient) => (
          <Field key={recipient.id} orientation="horizontal">
            <Checkbox id={`checkbox-group-${recipient.id}`} defaultChecked={recipient.on} />
            <FieldLabel htmlFor={`checkbox-group-${recipient.id}`}>{recipient.label}</FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  );
}
