import { Checkbox, Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@ovadev-gmbh/ui-ovadev";

const recipients = [
  { id: "oncall", label: "On-call engineer", on: true },
  { id: "ops", label: "ops@ova.dev", on: true },
  { id: "owner", label: "Tenant owner", on: false },
];

export default function CheckboxGroup() {
  return (
    <FieldSet className="w-72">
      <FieldLegend variant="label">Notify when a deployment fails</FieldLegend>
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
