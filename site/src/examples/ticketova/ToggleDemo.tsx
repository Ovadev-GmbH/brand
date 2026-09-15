import { Toggle } from "@ovadev-gmbh/ui-ticketova";
import { ArrowLineDownIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function ToggleDemo() {
  return (
    <Toggle variant="outline">
      <ArrowLineDownIcon data-icon="inline-start" />
      Follow log
    </Toggle>
  );
}
