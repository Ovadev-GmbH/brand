import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-ovadev";

const periods = ["1h", "24h", "7d", "30d"];

export default function ToggleGroupSpacing() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ToggleGroup variant="outline" defaultValue={["7d"]} aria-label="Period">
        {periods.map((period) => (
          <ToggleGroupItem key={period} value={period}>
            {period}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <ToggleGroup variant="outline" spacing={0} defaultValue={["7d"]} aria-label="Period">
        {periods.map((period) => (
          <ToggleGroupItem key={period} value={period}>
            {period}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
