import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-ticketova";

export default function ToggleGroupVertical() {
  return (
    <ToggleGroup
      orientation="vertical"
      variant="outline"
      spacing={0}
      defaultValue={["invoices"]}
      aria-label="Billing view"
      className="w-40"
    >
      <ToggleGroupItem value="invoices">Invoices</ToggleGroupItem>
      <ToggleGroupItem value="credits">Credit notes</ToggleGroupItem>
      <ToggleGroupItem value="usage">Usage</ToggleGroupItem>
    </ToggleGroup>
  );
}
