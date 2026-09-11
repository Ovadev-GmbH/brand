import { Label, RadioGroup, RadioGroupItem } from "@ovadev-gmbh/ui-januna";

const shifts = [
  { value: "lunch", label: "Lunch", hint: "11:30 – 14:30" },
  { value: "dinner", label: "Dinner", hint: "18:00 – 23:00" },
  { value: "late", label: "Late night", hint: "23:00 – 01:00", disabled: true },
];

export default function RadioGroupDemo() {
  return (
    <RadioGroup aria-label="Shift" defaultValue="dinner">
      {shifts.map((item) => (
        <div key={item.value} className="flex items-center gap-3">
          <RadioGroupItem
            id={`shift-${item.value}`}
            value={item.value}
            disabled={item.disabled}
          />
          <Label htmlFor={`shift-${item.value}`}>
            {item.label}
            <span className="font-normal text-content-secondary">{item.hint}</span>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
