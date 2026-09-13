import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
  RadioGroup,
  RadioGroupItem,
} from "@ovadev-gmbh/ui-internal";

const regions = [
  { value: "ch-zrh-1", location: "Zurich", description: "Data stays in Switzerland." },
  { value: "ch-gva-1", location: "Geneva", description: "The failover pair for ch-zrh-1." },
  { value: "eu-central-1", location: "Frankfurt", description: "Closest to tenants in Germany." },
];

export default function RadioGroupChoiceCard() {
  return (
    <RadioGroup defaultValue="ch-zrh-1" aria-label="Primary region" className="w-full max-w-sm">
      {regions.map((region) => (
        <FieldLabel key={region.value} htmlFor={`radio-group-card-${region.value}`}>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>
                <span className="text-label-13-mono">{region.value}</span>
                <span className="text-content-secondary">{region.location}</span>
              </FieldTitle>
              <FieldDescription>{region.description}</FieldDescription>
            </FieldContent>
            <RadioGroupItem id={`radio-group-card-${region.value}`} value={region.value} />
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  );
}
