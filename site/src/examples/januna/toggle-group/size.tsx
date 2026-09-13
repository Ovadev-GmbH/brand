import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-januna";

const sizes = ["sm", "default", "lg"] as const;

export default function ToggleGroupSize() {
  return (
    <div className="flex flex-col items-start gap-4">
      {sizes.map((size) => (
        <ToggleGroup key={size} variant="outline" size={size} defaultValue={["dinner"]} aria-label="Shift">
          <ToggleGroupItem value="lunch">Lunch</ToggleGroupItem>
          <ToggleGroupItem value="dinner">Dinner</ToggleGroupItem>
        </ToggleGroup>
      ))}
    </div>
  );
}
