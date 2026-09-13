import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-januna";

export default function ToggleGroupMultiple() {
  return (
    <ToggleGroup
      multiple
      variant="outline"
      size="sm"
      defaultValue={["confirmed", "seated"]}
      aria-label="Booking states to show"
    >
      <ToggleGroupItem value="confirmed">Confirmed</ToggleGroupItem>
      <ToggleGroupItem value="seated">Seated</ToggleGroupItem>
      <ToggleGroupItem value="no-show">No-show</ToggleGroupItem>
      <ToggleGroupItem value="cancelled">Cancelled</ToggleGroupItem>
    </ToggleGroup>
  );
}
