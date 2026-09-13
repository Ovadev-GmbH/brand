import * as React from "react";
import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-januna";

const shifts = [
  { value: "lunch", label: "Lunch", hours: "11:30 to 14:30", covers: 48 },
  { value: "dinner", label: "Dinner", hours: "18:00 to 23:00", covers: 112 },
];

export default function ToggleGroupControlled() {
  const [shift, setShift] = React.useState("dinner");
  const current = shifts.find((s) => s.value === shift)!;

  return (
    <div className="flex flex-col items-start gap-2">
      <ToggleGroup
        variant="outline"
        spacing={0}
        value={[shift]}
        onValueChange={(next) => {
          if (next[0]) setShift(next[0]);
        }}
        aria-label="Shift"
      >
        {shifts.map((s) => (
          <ToggleGroupItem key={s.value} value={s.value}>
            {s.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <span className="text-label-13 text-content-secondary">
        {current.hours}, <span className="text-label-13-mono text-content-primary">{current.covers}</span> covers booked
      </span>
    </div>
  );
}
