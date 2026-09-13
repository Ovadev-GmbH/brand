import * as React from "react";
import { Toggle } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserGroupIcon } from "@hugeicons/core-free-icons";

export default function ToggleControlled() {
  const [walkIns, setWalkIns] = React.useState(true);

  return (
    <div className="flex w-80 items-center justify-between gap-4">
      <span className="text-label-13 text-content-secondary">
        {walkIns ? "Taking walk-ins, " : "Walk-ins paused, "}
        <span className="text-label-13-mono text-content-primary">3</span> waiting
      </span>
      <Toggle variant="outline" size="sm" pressed={walkIns} onPressedChange={setWalkIns}>
        <HugeiconsIcon icon={UserGroupIcon} strokeWidth={2} data-icon="inline-start" />
        Walk-ins
      </Toggle>
    </div>
  );
}
