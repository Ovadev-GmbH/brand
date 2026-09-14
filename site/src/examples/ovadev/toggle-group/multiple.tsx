import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-ovadev";

export default function ToggleGroupMultiple() {
  return (
    <ToggleGroup multiple variant="outline" size="sm" defaultValue={["error", "warn"]} aria-label="Log levels">
      <ToggleGroupItem value="error">Error</ToggleGroupItem>
      <ToggleGroupItem value="warn">Warn</ToggleGroupItem>
      <ToggleGroupItem value="info">Info</ToggleGroupItem>
      <ToggleGroupItem value="debug">Debug</ToggleGroupItem>
    </ToggleGroup>
  );
}
