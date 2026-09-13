import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-januna";

const days = ["Today", "Tomorrow", "Weekend"];

export default function ToggleGroupSpacing() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ToggleGroup variant="outline" defaultValue={["Today"]} aria-label="Bookings for">
        {days.map((day) => (
          <ToggleGroupItem key={day} value={day}>
            {day}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <ToggleGroup variant="outline" spacing={0} defaultValue={["Today"]} aria-label="Bookings for">
        {days.map((day) => (
          <ToggleGroupItem key={day} value={day}>
            {day}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
