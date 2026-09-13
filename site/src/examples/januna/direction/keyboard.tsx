import { DirectionProvider, ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-januna";

type Direction = "ltr" | "rtl";

function ShiftPicker({ direction }: { direction: Direction }) {
  return (
    <DirectionProvider direction={direction}>
      <div dir={direction} className="flex flex-col gap-2">
        <span className="text-label-12-mono text-content-secondary">{direction}</span>
        <ToggleGroup variant="outline" defaultValue={["dinner"]} aria-label={`Shift, ${direction}`}>
          <ToggleGroupItem value="lunch">Lunch</ToggleGroupItem>
          <ToggleGroupItem value="afternoon">Afternoon</ToggleGroupItem>
          <ToggleGroupItem value="dinner">Dinner</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </DirectionProvider>
  );
}

export default function DirectionKeyboard() {
  return (
    <div className="flex flex-wrap gap-12">
      <ShiftPicker direction="ltr" />
      <ShiftPicker direction="rtl" />
    </div>
  );
}
