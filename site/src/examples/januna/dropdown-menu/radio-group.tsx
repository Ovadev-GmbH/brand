import * as React from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

const shifts = [
  { value: "lunch", label: "Lunch", hours: "11:30 to 14:30" },
  { value: "dinner", label: "Dinner", hours: "18:00 to 23:00" },
  { value: "late", label: "Late bar", hours: "22:00 to 01:00" },
];

export default function DropdownMenuRadioGroupExample() {
  const [shift, setShift] = React.useState("dinner");
  const current = shifts.find((s) => s.value === shift)!;

  return (
    <div className="flex flex-col items-start gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>
          {current.label}
          <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} data-icon="inline-end" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Shift</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={shift} onValueChange={setShift}>
              {shifts.map((s) => (
                <DropdownMenuRadioItem key={s.value} value={s.value}>
                  {s.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <span className="text-label-13-mono text-content-secondary">{current.hours}</span>
    </div>
  );
}
