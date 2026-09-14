import { Toggle } from "@ovadev-gmbh/ui-ovadev";
import { BookmarkIcon, PinIcon } from "lucide-react";

export default function ToggleWithIcon() {
  return (
    <div className="flex items-center gap-2">
      <Toggle variant="outline">
        <BookmarkIcon data-icon="inline-start" />
        Read later
      </Toggle>
      <Toggle variant="outline" defaultPressed>
        <PinIcon data-icon="inline-start" />
        Pinned
      </Toggle>
    </div>
  );
}
