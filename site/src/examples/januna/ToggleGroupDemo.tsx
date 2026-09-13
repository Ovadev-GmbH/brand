import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-januna";

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup variant="outline" defaultValue={["dinner"]} aria-label="Shift">
      <ToggleGroupItem value="lunch">Lunch</ToggleGroupItem>
      <ToggleGroupItem value="dinner">Dinner</ToggleGroupItem>
      <ToggleGroupItem value="late">Late</ToggleGroupItem>
    </ToggleGroup>
  );
}
