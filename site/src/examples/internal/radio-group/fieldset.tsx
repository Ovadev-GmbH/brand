import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  RadioGroup,
  RadioGroupItem,
} from "@ovadev-gmbh/ui-internal";

const channels = [
  { value: "email", label: "E-mail to the billing contact" },
  { value: "portal", label: "Customer portal only" },
  { value: "both", label: "E-mail and customer portal" },
];

export default function RadioGroupFieldset() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend id="radio-group-fieldset-legend" variant="label">
        Invoice delivery
      </FieldLegend>
      <FieldDescription>How acme-logistics receives its monthly invoice.</FieldDescription>
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
