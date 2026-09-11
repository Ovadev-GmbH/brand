import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from "@hugeicons/core-free-icons";

export default function ToggleGroupDemo() {
  const [shift, setShift] = useState<string[]>(["dinner"]);

  return (
    <div className="flex max-w-2xl flex-col gap-4">
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
        <ToggleGroup
          variant="outline"
          spacing={0}
          value={shift}
          onValueChange={setShift}
          multiple
        >
          <ToggleGroupItem value="lunch">Lunch</ToggleGroupItem>
          <ToggleGroupItem value="dinner">Dinner</ToggleGroupItem>
          <ToggleGroupItem value="late">Late</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <ToggleGroup size="sm" variant="outline" defaultValue={["2"]}>
          <ToggleGroupItem value="2">2 guests</ToggleGroupItem>
          <ToggleGroupItem value="4">4 guests</ToggleGroupItem>
          <ToggleGroupItem value="6">6 guests</ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup orientation="vertical" variant="outline" spacing={0} defaultValue={["patio"]}>
          <ToggleGroupItem value="patio">Patio</ToggleGroupItem>
          <ToggleGroupItem value="bar">Bar</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
