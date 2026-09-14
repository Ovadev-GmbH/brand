import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  RadioGroup,
  RadioGroupItem,
} from "@ovadev-gmbh/ui-ovadev";

const channels = [
  { value: "email", label: "E-mail to the contact person" },
  { value: "call", label: "Phone call from Philip" },
  { value: "both", label: "E-mail and a call" },
];

export default function RadioGroupFieldset() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend id="radio-group-fieldset-legend" variant="label">
        How we reply
      </FieldLegend>
      <FieldDescription>How Gemeinde Hausen am Albis hears back on its quote request.</FieldDescription>
      <RadioGroup defaultValue="email" aria-labelledby="radio-group-fieldset-legend">
        {channels.map((channel) => (
          <Field key={channel.value} orientation="horizontal">
            <RadioGroupItem id={`radio-group-fieldset-${channel.value}`} value={channel.value} />
            <FieldLabel htmlFor={`radio-group-fieldset-${channel.value}`}>{channel.label}</FieldLabel>
          </Field>
        ))}
      </RadioGroup>
    </FieldSet>
  );
}
