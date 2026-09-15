import { Field, FieldError, FieldLabel, FieldLegend, FieldSet, RadioGroup, RadioGroupItem } from "@ovadev-gmbh/ui-ticketova";

const reasons = [
  { value: "duplicate", label: "Duplicate charge" },
  { value: "wrong-plan", label: "Billed on the wrong plan" },
  { value: "goodwill", label: "Goodwill credit" },
];

export default function RadioGroupInvalid() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend id="radio-group-invalid-legend" variant="label">
        Refund reason
      </FieldLegend>
      <RadioGroup aria-labelledby="radio-group-invalid-legend">
        {reasons.map((reason) => (
          <Field key={reason.value} orientation="horizontal" data-invalid>
            <RadioGroupItem id={`radio-group-invalid-${reason.value}`} value={reason.value} aria-invalid />
            <FieldLabel htmlFor={`radio-group-invalid-${reason.value}`}>{reason.label}</FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      <FieldError>Choose a reason before refunding INV-2026-0142.</FieldError>
    </FieldSet>
  );
}
