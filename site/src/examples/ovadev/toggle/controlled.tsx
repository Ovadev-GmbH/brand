import * as React from "react";
import { Toggle } from "@ovadev-gmbh/ui-ovadev";
import { BellIcon } from "lucide-react";

export default function ToggleControlled() {
  const [follow, setFollow] = React.useState(true);

  return (
    <div className="flex w-80 items-center justify-between gap-4">
      <span className="text-label-13 text-content-secondary">
        {follow ? "Subscribed to " : "Not following "}
        <span className="text-label-13-mono text-content-primary">status.ova.dev</span>
      </span>
      <Toggle variant="outline" size="sm" pressed={follow} onPressedChange={setFollow}>
        <BellIcon data-icon="inline-start" />
        Updates
      </Toggle>
    </div>
  );
}
