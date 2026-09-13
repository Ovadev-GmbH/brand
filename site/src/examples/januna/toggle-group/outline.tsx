import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-januna";

export default function ToggleGroupOutline() {
  return (
    <ToggleGroup variant="outline" defaultValue={["terrace"]} aria-label="Area">
      <ToggleGroupItem value="dining-room">Dining room</ToggleGroupItem>
      <ToggleGroupItem value="terrace">Terrace</ToggleGroupItem>
      <ToggleGroupItem value="bar">Bar</ToggleGroupItem>
    </ToggleGroup>
  );
}
