import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  LeftToRightListBulletIcon,
  RestaurantTableIcon,
  TimeScheduleIcon,
} from "@hugeicons/core-free-icons";

export default function ToggleGroupDemo() {
  const [shifts, setShifts] = useState<string[]>(["dinner"]);

  return (
    <div className="flex flex-wrap items-center gap-4">
      <ToggleGroup defaultValue={["floor"]} aria-label="View">
        <ToggleGroupItem value="floor" aria-label="Floor plan">
          <HugeiconsIcon icon={RestaurantTableIcon} strokeWidth={2} />
        </ToggleGroupItem>
        <ToggleGroupItem value="timeline" aria-label="Timeline">
          <HugeiconsIcon icon={TimeScheduleIcon} strokeWidth={2} />
        </ToggleGroupItem>
        <ToggleGroupItem value="list" aria-label="List">
          <HugeiconsIcon icon={LeftToRightListBulletIcon} strokeWidth={2} />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup
        variant="outline"
        spacing={0}
        value={shifts}
        onValueChange={setShifts}
        multiple
        aria-label="Shifts"
      >
        <ToggleGroupItem value="lunch">Lunch</ToggleGroupItem>
        <ToggleGroupItem value="dinner">Dinner</ToggleGroupItem>
        <ToggleGroupItem value="late">Late</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup size="sm" variant="outline" defaultValue={["2"]} aria-label="Party size">
        <ToggleGroupItem value="2">2 guests</ToggleGroupItem>
        <ToggleGroupItem value="4">4 guests</ToggleGroupItem>
        <ToggleGroupItem value="6">6 guests</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
