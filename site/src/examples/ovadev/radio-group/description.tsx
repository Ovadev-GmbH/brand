import { Field, FieldContent, FieldDescription, FieldLabel, RadioGroup, RadioGroupItem } from "@ovadev-gmbh/ui-ovadev";

const modes = [
  {
    value: "scanner",
    label: "Scanner app",
    description: "Staff scan the QR code with the TICKETOVA app on a phone. Works offline for an hour.",
  },
  {
    value: "turnstile",
    label: "Turnstile",
    description: "The ticket opens the gate directly. Needs a wired reader at every entrance.",
  },
  {
    value: "manual",
    label: "Manual check",
    description: "Staff look at the ticket on screen. No hardware; the live report counts nothing.",
  },
];

export default function RadioGroupDescription() {
  return (
    <RadioGroup defaultValue="scanner" aria-label="Admission control" className="w-full max-w-sm">
      {modes.map((mode) => (
        <Field key={mode.value} orientation="horizontal">
          <RadioGroupItem id={`radio-group-description-${mode.value}`} value={mode.value} />
          <FieldContent>
            <FieldLabel htmlFor={`radio-group-description-${mode.value}`}>{mode.label}</FieldLabel>
            <FieldDescription>{mode.description}</FieldDescription>
          </FieldContent>
        </Field>
      ))}
    </RadioGroup>
  );
}
