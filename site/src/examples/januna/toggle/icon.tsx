import { Toggle } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon, Table01Icon } from "@hugeicons/core-free-icons";

export default function ToggleIcon() {
  return (
    <div className="flex items-center gap-1">
      <Toggle aria-label="Show table numbers" defaultPressed>
        <HugeiconsIcon icon={Table01Icon} strokeWidth={2} />
      </Toggle>
      <Toggle aria-label="Show arrival times">
        <HugeiconsIcon icon={Clock01Icon} strokeWidth={2} />
      </Toggle>
    </div>
  );
}
