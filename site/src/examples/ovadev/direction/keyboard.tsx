import { DirectionProvider, ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-ovadev";

type Direction = "ltr" | "rtl";

function TicketPicker({ direction }: { direction: Direction }) {
  return (
    <DirectionProvider direction={direction}>
      <div dir={direction} className="flex flex-col gap-2">
        <span className="text-label-12-mono text-content-secondary">{direction}</span>
        <ToggleGroup variant="outline" defaultValue={["adult"]} aria-label={`Ticket, ${direction}`}>
          <ToggleGroupItem value="child">Child</ToggleGroupItem>
          <ToggleGroupItem value="adult">Adult</ToggleGroupItem>
          <ToggleGroupItem value="family">Family</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </DirectionProvider>
  );
}

export default function DirectionKeyboard() {
  return (
    <div className="flex flex-wrap gap-12">
      <TicketPicker direction="ltr" />
      <TicketPicker direction="rtl" />
    </div>
  );
}
