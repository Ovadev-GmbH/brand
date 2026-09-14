import { Toggle } from "@ovadev-gmbh/ui-ovadev";
import { BoldIcon, ItalicIcon } from "lucide-react";

export default function ToggleIcon() {
  return (
    <div className="flex items-center gap-1">
      <Toggle aria-label="Bold" defaultPressed>
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Italic">
        <ItalicIcon />
      </Toggle>
    </div>
  );
}
