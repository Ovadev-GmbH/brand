import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-januna";

export default function ToggleGroupVertical() {
  return (
    <ToggleGroup
      orientation="vertical"
      variant="outline"
      spacing={0}
      defaultValue={["floor-plan"]}
      aria-label="Bookings view"
      className="w-44"
    >
      <ToggleGroupItem value="floor-plan">Floor plan</ToggleGroupItem>
      <ToggleGroupItem value="list">List</ToggleGroupItem>
      <ToggleGroupItem value="timeline">Timeline</ToggleGroupItem>
    </ToggleGroup>
  );
}
