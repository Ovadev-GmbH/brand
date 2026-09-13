import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  RadioGroup,
  RadioGroupItem,
} from "@ovadev-gmbh/ui-januna";

const channels = [
  { value: "sms", label: "Text message" },
  { value: "email", label: "E-mail" },
  { value: "both", label: "Text message and e-mail" },
];

export default function RadioGroupFieldset() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend id="radio-group-fieldset-legend" variant="label">
        Confirmation
      </FieldLegend>
      <FieldDescription>How Nora Keller hears about her table for 6 at 19:30.</FieldDescription>
      <RadioGroup defaultValue="sms" aria-labelledby="radio-group-fieldset-legend">
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
