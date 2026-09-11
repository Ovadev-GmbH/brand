import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from "@hugeicons/core-free-icons";

export default function ToggleGroupDemo() {
  const [shifts, setShifts] = useState<string[]>(["dinner"]);

  return (
    <div className="flex flex-wrap items-center gap-4">
      <ToggleGroup defaultValue={["left"]}>
        <ToggleGroupItem value="left" aria-label="Align left">
          <HugeiconsIcon icon={TextAlignLeftIcon} strokeWidth={2} />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <HugeiconsIcon icon={TextAlignCenterIcon} strokeWidth={2} />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <HugeiconsIcon icon={TextAlignRightIcon} strokeWidth={2} />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant="outline" spacing={0} value={shifts} onValueChange={setShifts} multiple>
        <ToggleGroupItem value="lunch">Lunch</ToggleGroupItem>
        <ToggleGroupItem value="dinner">Dinner</ToggleGroupItem>
        <ToggleGroupItem value="late">Late</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup size="sm" variant="outline" defaultValue={["2"]}>
        <ToggleGroupItem value="2">2 guests</ToggleGroupItem>
        <ToggleGroupItem value="4">4 guests</ToggleGroupItem>
        <ToggleGroupItem value="6">6 guests</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
