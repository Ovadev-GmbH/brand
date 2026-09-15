import { Toggle } from "@ovadev-gmbh/ui-ticketova";
import { BellIcon, PushPinIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function ToggleWithIcon() {
  return (
    <div className="flex items-center gap-2">
      <Toggle variant="outline">
        <BellIcon data-icon="inline-start" />
        Watch incident
      </Toggle>
      <Toggle variant="outline" defaultPressed>
        <PushPinIcon data-icon="inline-start" />
        Pinned
      </Toggle>
    </div>
  );
}
