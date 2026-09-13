import * as React from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ovadev-gmbh/ui-januna";

const shifts = [
  { value: "lunch", label: "Lunch", hours: "11:30 to 14:30" },
  { value: "dinner", label: "Dinner", hours: "18:00 to 23:00" },
  { value: "late", label: "Late bar", hours: "22:00 to 01:00" },
];

export default function CommandChecked() {
  const [shift, setShift] = React.useState("dinner");

  return (
    <Command className="w-96 max-w-full">
      <CommandInput placeholder="Switch shift…" />
      <CommandList>
        <CommandEmpty>No shift matches.</CommandEmpty>
        <CommandGroup heading="Shift">
          {shifts.map((s) => (
            <CommandItem key={s.value} value={s.value} data-checked={shift === s.value} onSelect={setShift}>
              {s.label}
              <span className="text-label-12-mono text-content-tertiary">{s.hours}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
