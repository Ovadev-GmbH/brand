import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-ovadev";

const periods = ["DE", "EN", "FR"];

export default function ToggleGroupSize() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ToggleGroup variant="outline" size="sm" defaultValue={["EN"]} aria-label="Language">
        {periods.map((period) => (
          <ToggleGroupItem key={period} value={period}>
            {period}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <ToggleGroup variant="outline" defaultValue={["EN"]} aria-label="Language">
        {periods.map((period) => (
          <ToggleGroupItem key={period} value={period}>
            {period}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <ToggleGroup variant="outline" size="lg" defaultValue={["EN"]} aria-label="Language">
        {periods.map((period) => (
          <ToggleGroupItem key={period} value={period}>
            {period}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
