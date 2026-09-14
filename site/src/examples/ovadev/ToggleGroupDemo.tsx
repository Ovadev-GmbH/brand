import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-ovadev";

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup variant="outline" defaultValue={["all"]} aria-label="Blog topic">
      <ToggleGroupItem value="all">All</ToggleGroupItem>
      <ToggleGroupItem value="ticketova">TICKETOVA</ToggleGroupItem>
      <ToggleGroupItem value="januna">JANUNA</ToggleGroupItem>
      <ToggleGroupItem value="company">Company</ToggleGroupItem>
    </ToggleGroup>
  );
}
