import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-internal";

const periods = ["1h", "24h", "7d"];

export default function ToggleGroupSize() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ToggleGroup variant="outline" size="sm" defaultValue={["24h"]} aria-label="Period">
        {periods.map((period) => (
          <ToggleGroupItem key={period} value={period}>
            {period}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <ToggleGroup variant="outline" defaultValue={["24h"]} aria-label="Period">
        {periods.map((period) => (
          <ToggleGroupItem key={period} value={period}>
            {period}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <ToggleGroup variant="outline" size="lg" defaultValue={["24h"]} aria-label="Period">
        {periods.map((period) => (
          <ToggleGroupItem key={period} value={period}>
            {period}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
