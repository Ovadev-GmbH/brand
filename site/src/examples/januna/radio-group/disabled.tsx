import { Field, FieldLabel, RadioGroup, RadioGroupItem } from "@ovadev-gmbh/ui-januna";

const shifts = [
  { value: "lunch", label: "Lunch", hours: "11:30 to 14:30" },
  { value: "dinner", label: "Dinner", hours: "18:00 to 23:00" },
  { value: "late", label: "Late night, closed on Sundays", hours: "23:00 to 01:00", disabled: true },
];

export default function RadioGroupDisabled() {
  return (
    <RadioGroup defaultValue="dinner" aria-label="Shift" className="w-full max-w-sm">
      {shifts.map((shift) => (
        <Field key={shift.value} orientation="horizontal" data-disabled={shift.disabled || undefined}>
          <RadioGroupItem id={`radio-group-disabled-${shift.value}`} value={shift.value} disabled={shift.disabled} />
          <FieldLabel htmlFor={`radio-group-disabled-${shift.value}`}>
            {shift.label}
            <span className="ml-auto text-label-13-mono text-content-secondary">{shift.hours}</span>
          </FieldLabel>
        </Field>
      ))}
    </RadioGroup>
  );
}
