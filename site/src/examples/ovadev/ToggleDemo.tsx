import { Toggle } from "@ovadev-gmbh/ui-ovadev";
import { BellIcon } from "lucide-react";

export default function ToggleDemo() {
  return (
    <Toggle variant="outline">
      <BellIcon data-icon="inline-start" />
      Subscribe to updates
    </Toggle>
  );
}
