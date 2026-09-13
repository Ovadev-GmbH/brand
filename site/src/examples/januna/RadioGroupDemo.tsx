import { Label, RadioGroup, RadioGroupItem } from "@ovadev-gmbh/ui-januna";

const shifts = [
  { value: "lunch", label: "Lunch" },
  { value: "dinner", label: "Dinner" },
  { value: "late", label: "Late night" },
];

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="dinner" aria-label="Shift" className="w-fit">
      {shifts.map((shift) => (
        <div key={shift.value} className="flex items-center gap-3">
          <RadioGroupItem id={`radio-group-${shift.value}`} value={shift.value} />
          <Label htmlFor={`radio-group-${shift.value}`}>{shift.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
