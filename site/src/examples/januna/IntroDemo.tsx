import { Button, Input, InputGroup, InputGroupAddon, InputGroupInput, ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, Calendar03Icon, GridViewIcon, LeftToRightListBulletIcon, Search01Icon } from "@hugeicons/core-free-icons";

/** The introduction's Components card: a few of the parts, side by side. */
export default function IntroDemo() {
  return (
    <div className="flex max-w-96 flex-col gap-3">
      <div className="flex items-center gap-3">
        <InputGroup className="w-56">
          <InputGroupAddon>
            <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
          </InputGroupAddon>
          <InputGroupInput placeholder="Find a booking" readOnly />
        </InputGroup>
        <Button>
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2} data-icon="inline-start" />
          New booking
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon" aria-label="Calendar">
          <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
        </Button>
        <ToggleGroup value={["grid"]} aria-label="View">
          <ToggleGroupItem value="grid" aria-label="Grid">
            <HugeiconsIcon icon={GridViewIcon} strokeWidth={2} />
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List">
            <HugeiconsIcon icon={LeftToRightListBulletIcon} strokeWidth={2} />
          </ToggleGroupItem>
        </ToggleGroup>
        <Input placeholder="Guests" className="w-28" readOnly />
      </div>
    </div>
  );
}
