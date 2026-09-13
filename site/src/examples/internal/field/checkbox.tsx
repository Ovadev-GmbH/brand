import {
  Checkbox,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@ovadev-gmbh/ui-internal";

const events = [
  { name: "invoice.paid", on: true },
  { name: "invoice.overdue", on: true },
  { name: "deployment.failed", on: false },
  { name: "key.revoked", on: false },
];

export default function FieldCheckbox() {
  return (
    <FieldSet className="w-80">
      <FieldLegend>Webhook events</FieldLegend>
      <FieldDescription>Sent to https://acme.ch/hooks/ova as they happen.</FieldDescription>
      <FieldGroup data-slot="checkbox-group">
        {events.map((event) => (
          <Field key={event.name} orientation="horizontal">
            <Checkbox id={`field-checkbox-${event.name}`} defaultChecked={event.on} />
            <FieldLabel htmlFor={`field-checkbox-${event.name}`} className="text-label-13-mono">
              {event.name}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  );
}
