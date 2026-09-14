import { Toggle } from "@ovadev-gmbh/ui-ovadev";
import { ArrowDownToLineIcon } from "lucide-react";

export default function ToggleDemo() {
  return (
    <Toggle variant="outline">
      <ArrowDownToLineIcon data-icon="inline-start" />
      Follow log
    </Toggle>
  );
}
