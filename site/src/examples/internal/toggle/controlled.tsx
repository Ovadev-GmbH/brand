import * as React from "react";
import { Toggle } from "@ovadev-gmbh/ui-internal";
import { ArrowDownToLineIcon } from "lucide-react";

export default function ToggleControlled() {
  const [follow, setFollow] = React.useState(true);

  return (
    <div className="flex w-80 items-center justify-between gap-4">
      <span className="text-label-13 text-content-secondary">
        {follow ? "Following " : "Paused on "}
        <span className="text-label-13-mono text-content-primary">dpl_9e02a</span>
      </span>
      <Toggle variant="outline" size="sm" pressed={follow} onPressedChange={setFollow}>
        <ArrowDownToLineIcon data-icon="inline-start" />
        Follow log
      </Toggle>
    </div>
  );
}
