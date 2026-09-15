import { Toggle } from "@ovadev-gmbh/ui-ticketova";
import { ClockIcon, TextAlignLeftIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function ToggleIcon() {
  return (
    <div className="flex items-center gap-1">
      <Toggle aria-label="Wrap long lines" defaultPressed>
        <TextAlignLeftIcon />
      </Toggle>
      <Toggle aria-label="Show timestamps">
        <ClockIcon />
      </Toggle>
    </div>
  );
}
