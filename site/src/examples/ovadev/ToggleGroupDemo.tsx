import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-ovadev";

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup variant="outline" defaultValue={["24h"]} aria-label="Time range">
      <ToggleGroupItem value="1h">1h</ToggleGroupItem>
      <ToggleGroupItem value="24h">24h</ToggleGroupItem>
      <ToggleGroupItem value="7d">7d</ToggleGroupItem>
      <ToggleGroupItem value="30d">30d</ToggleGroupItem>
    </ToggleGroup>
  );
}
