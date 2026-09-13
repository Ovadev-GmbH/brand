import {
  Checkbox,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@ovadev-gmbh/ui-januna";

const messages = [
  { id: "confirmation", label: "Confirmation right after booking", on: true },
  { id: "reminder", label: "Reminder at 10:00 on the day", on: true },
  { id: "ready", label: "Table is ready", on: false },
  { id: "thanks", label: "Thank you the next morning", on: false },
];

export default function FieldCheckbox() {
  return (
    <FieldSet className="w-80">
      <FieldLegend>Text messages</FieldLegend>
      <FieldDescription>Sent to the number on the booking.</FieldDescription>
      <FieldGroup data-slot="checkbox-group">
        {messages.map((message) => (
          <Field key={message.id} orientation="horizontal">
            <Checkbox id={`field-checkbox-${message.id}`} defaultChecked={message.on} />
            <FieldLabel htmlFor={`field-checkbox-${message.id}`}>{message.label}</FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  );
}
