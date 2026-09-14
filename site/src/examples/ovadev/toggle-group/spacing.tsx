import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-ovadev";

const periods = ["Week", "Month", "Season", "Year"];

export default function ToggleGroupSpacing() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ToggleGroup variant="outline" defaultValue={["Season"]} aria-label="Report period">
        {periods.map((period) => (
          <ToggleGroupItem key={period} value={period}>
            {period}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <ToggleGroup variant="outline" spacing={0} defaultValue={["Season"]} aria-label="Report period">
        {periods.map((period) => (
          <ToggleGroupItem key={period} value={period}>
            {period}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
