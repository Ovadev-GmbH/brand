import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-internal";

export default function ToggleGroupDisabled() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ToggleGroup variant="outline" disabled defaultValue={["team"]} aria-label="Plan">
        <ToggleGroupItem value="starter">Starter</ToggleGroupItem>
        <ToggleGroupItem value="team">Team</ToggleGroupItem>
        <ToggleGroupItem value="scale">Scale</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant="outline" defaultValue={["ch-zrh-1"]} aria-label="Region">
        <ToggleGroupItem value="ch-zrh-1" className="text-label-13-mono">
          ch-zrh-1
        </ToggleGroupItem>
        <ToggleGroupItem value="eu-central-1" className="text-label-13-mono" disabled>
          eu-central-1
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
