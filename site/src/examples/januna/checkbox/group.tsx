import { Checkbox, Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@ovadev-gmbh/ui-januna";

const channels = [
  { id: "sms", label: "Text message, 24 hours before", on: true },
  { id: "email", label: "E-mail, on the morning of the booking", on: true },
  { id: "call", label: "A call from the host, for parties of 8 or more", on: false },
];

export default function CheckboxGroup() {
  return (
    <FieldSet className="w-96">
      <FieldLegend variant="label">Remind guests before their booking</FieldLegend>
      <FieldGroup data-slot="checkbox-group">
        {channels.map((channel) => (
          <Field key={channel.id} orientation="horizontal">
            <Checkbox id={`checkbox-group-${channel.id}`} defaultChecked={channel.on} />
            <FieldLabel htmlFor={`checkbox-group-${channel.id}`}>{channel.label}</FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  );
}
