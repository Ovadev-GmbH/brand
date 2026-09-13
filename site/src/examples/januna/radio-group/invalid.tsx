import { Field, FieldError, FieldLabel, FieldLegend, FieldSet, RadioGroup, RadioGroupItem } from "@ovadev-gmbh/ui-januna";

const reasons = [
  { value: "guest", label: "The guest cancelled" },
  { value: "no-show", label: "No-show" },
  { value: "restaurant", label: "The restaurant closed the shift" },
];

export default function RadioGroupInvalid() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend id="radio-group-invalid-legend" variant="label">
        Why is the booking cancelled?
      </FieldLegend>
      <RadioGroup aria-labelledby="radio-group-invalid-legend">
        {reasons.map((reason) => (
          <Field key={reason.value} orientation="horizontal" data-invalid>
            <RadioGroupItem id={`radio-group-invalid-${reason.value}`} value={reason.value} aria-invalid />
            <FieldLabel htmlFor={`radio-group-invalid-${reason.value}`}>{reason.label}</FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      <FieldError>Choose a reason before releasing T12.</FieldError>
    </FieldSet>
  );
}
