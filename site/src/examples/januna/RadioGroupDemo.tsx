import * as React from "react";
import { Label, RadioGroup, RadioGroupItem } from "@ovadev-gmbh/ui-januna";

const shifts = [
  { value: "lunch", label: "Lunch", hint: "11:30 – 14:30" },
  { value: "dinner", label: "Dinner", hint: "18:00 – 23:00" },
  { value: "late", label: "Late night", hint: "23:00 – 01:00", disabled: true },
];

export default function RadioGroupDemo() {
  const [shift, setShift] = React.useState("dinner");

  return (
    <div className="grid max-w-[640px] gap-6">
      <RadioGroup
        aria-label="Shift"
        value={shift}
        onValueChange={(value) => setShift(String(value))}
      >
        {shifts.map((item) => (
          <div key={item.value} className="flex items-center gap-3">
            <RadioGroupItem
              id={`shift-${item.value}`}
              value={item.value}
              disabled={item.disabled}
            />
            <Label htmlFor={`shift-${item.value}`}>
              {item.label}
              <span className="font-normal text-muted-foreground">{item.hint}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>

      <RadioGroup aria-label="Seating" defaultValue="inside" className="flex gap-6">
        <div className="flex items-center gap-3">
          <RadioGroupItem id="seat-inside" value="inside" />
          <Label htmlFor="seat-inside">Inside</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem id="seat-terrace" value="terrace" />
          <Label htmlFor="seat-terrace">Terrace</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem id="seat-bar" value="bar" aria-invalid />
          <Label htmlFor="seat-bar">Bar</Label>
        </div>
      </RadioGroup>

      <p className="text-sm text-muted-foreground">Selected shift: {shift}</p>
    </div>
  );
}
