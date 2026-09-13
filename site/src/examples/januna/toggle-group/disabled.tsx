import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-januna";

export default function ToggleGroupDisabled() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ToggleGroup variant="outline" disabled defaultValue={["dinner"]} aria-label="Shift">
        <ToggleGroupItem value="lunch">Lunch</ToggleGroupItem>
        <ToggleGroupItem value="dinner">Dinner</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant="outline" defaultValue={["dining-room"]} aria-label="Area">
        <ToggleGroupItem value="dining-room">Dining room</ToggleGroupItem>
        <ToggleGroupItem value="terrace" disabled>
          Terrace
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
