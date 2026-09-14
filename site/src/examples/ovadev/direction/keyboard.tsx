import { DirectionProvider, ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-ovadev";

type Direction = "ltr" | "rtl";

function PlanPicker({ direction }: { direction: Direction }) {
  return (
    <DirectionProvider direction={direction}>
      <div dir={direction} className="flex flex-col gap-2">
        <span className="text-label-12-mono text-content-secondary">{direction}</span>
        <ToggleGroup variant="outline" defaultValue={["team"]} aria-label={`Plan, ${direction}`}>
          <ToggleGroupItem value="starter">Starter</ToggleGroupItem>
          <ToggleGroupItem value="team">Team</ToggleGroupItem>
          <ToggleGroupItem value="scale">Scale</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </DirectionProvider>
  );
}

export default function DirectionKeyboard() {
  return (
    <div className="flex flex-wrap gap-12">
      <PlanPicker direction="ltr" />
      <PlanPicker direction="rtl" />
    </div>
  );
}
