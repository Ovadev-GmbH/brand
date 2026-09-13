import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ovadev-gmbh/ui-januna";

const shifts = [
  { label: "Lunch", value: "lunch" },
  { label: "Dinner", value: "dinner" },
  { label: "Late night", value: "late" },
];

const tonight: Record<string, { hours: string; covers: number }> = {
  lunch: { hours: "11:30 to 14:30", covers: 38 },
  dinner: { hours: "18:00 to 23:00", covers: 86 },
  late: { hours: "23:00 to 01:00", covers: 12 },
};

export default function SelectControlled() {
  const [shift, setShift] = React.useState<string | null>("dinner");
  const current = shift ? tonight[shift] : undefined;

  return (
    <div className="flex flex-col items-start gap-2">
      <Select items={shifts} value={shift} onValueChange={setShift}>
        <SelectTrigger className="w-44" aria-label="Shift">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {shifts.map((s) => (
            <SelectItem key={s.value} value={s.value}>
              {s.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span className="text-label-13 text-content-secondary">
        {current ? (
          <>
            <span className="text-label-13-mono">{current.hours}</span>, {current.covers} covers booked
          </>
        ) : (
          "No shift chosen"
        )}
      </span>
    </div>
  );
}
