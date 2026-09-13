import { Field, FieldContent, FieldDescription, FieldLabel, RadioGroup, RadioGroupItem } from "@ovadev-gmbh/ui-januna";

const holds = [
  {
    value: "15",
    label: "15 minutes",
    description: "The table goes to the waitlist at a quarter past the booking time.",
  },
  {
    value: "30",
    label: "30 minutes",
    description: "For regulars and parties of 6 or more.",
  },
  {
    value: "cancel",
    label: "Until the guest cancels",
    description: "Only for bookings with a paid deposit.",
  },
];

export default function RadioGroupDescription() {
  return (
    <RadioGroup defaultValue="15" aria-label="How long a table is held" className="w-full max-w-sm">
      {holds.map((hold) => (
        <Field key={hold.value} orientation="horizontal">
          <RadioGroupItem id={`radio-group-description-${hold.value}`} value={hold.value} />
          <FieldContent>
            <FieldLabel htmlFor={`radio-group-description-${hold.value}`}>{hold.label}</FieldLabel>
            <FieldDescription>{hold.description}</FieldDescription>
          </FieldContent>
        </Field>
      ))}
    </RadioGroup>
  );
}
