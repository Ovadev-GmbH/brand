import { Field, FieldContent, FieldDescription, FieldLabel, RadioGroup, RadioGroupItem } from "@ovadev-gmbh/ui-ticketova";

const strategies = [
  {
    value: "rolling",
    label: "Rolling",
    description: "Replaces one instance at a time. No downtime; both versions serve for a minute.",
  },
  {
    value: "blue-green",
    label: "Blue-green",
    description: "Starts the new version beside the old one, then moves all traffic at once.",
  },
  {
    value: "recreate",
    label: "Recreate",
    description: "Stops every instance before starting the new ones. Up to 60 seconds of downtime.",
  },
];

export default function RadioGroupDescription() {
  return (
    <RadioGroup defaultValue="rolling" aria-label="Deployment strategy" className="w-full max-w-sm">
      {strategies.map((strategy) => (
        <Field key={strategy.value} orientation="horizontal">
          <RadioGroupItem id={`radio-group-description-${strategy.value}`} value={strategy.value} />
          <FieldContent>
            <FieldLabel htmlFor={`radio-group-description-${strategy.value}`}>{strategy.label}</FieldLabel>
            <FieldDescription>{strategy.description}</FieldDescription>
          </FieldContent>
        </Field>
      ))}
    </RadioGroup>
  );
}
