import { Toggle } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { WalkingIcon } from "@hugeicons/core-free-icons";

export default function ToggleDemo() {
  return (
    <Toggle variant="outline">
      <HugeiconsIcon icon={WalkingIcon} strokeWidth={2} data-icon="inline-start" />
      Take walk-ins
    </Toggle>
  );
}
