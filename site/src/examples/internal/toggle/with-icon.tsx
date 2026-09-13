import { Toggle } from "@ovadev-gmbh/ui-internal";
import { BellIcon, PinIcon } from "lucide-react";

export default function ToggleWithIcon() {
  return (
    <div className="flex items-center gap-2">
      <Toggle variant="outline">
        <BellIcon data-icon="inline-start" />
        Watch incident
      </Toggle>
      <Toggle variant="outline" defaultPressed>
        <PinIcon data-icon="inline-start" />
        Pinned
      </Toggle>
    </div>
  );
}
