import { Toggle } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { BellIcon, PinIcon } from "@hugeicons/core-free-icons";

export default function ToggleWithIcon() {
  return (
    <div className="flex items-center gap-2">
      <Toggle variant="outline">
        <HugeiconsIcon icon={BellIcon} strokeWidth={2} data-icon="inline-start" />
        Watch waitlist
      </Toggle>
      <Toggle variant="outline" defaultPressed>
        <HugeiconsIcon icon={PinIcon} strokeWidth={2} data-icon="inline-start" />
        Pinned
      </Toggle>
    </div>
  );
}
