import { Toggle } from "@ovadev-gmbh/ui-internal";
import { ClockIcon, WrapTextIcon } from "lucide-react";

export default function ToggleIcon() {
  return (
    <div className="flex items-center gap-1">
      <Toggle aria-label="Wrap long lines" defaultPressed>
        <WrapTextIcon />
      </Toggle>
      <Toggle aria-label="Show timestamps">
        <ClockIcon />
      </Toggle>
    </div>
  );
}
