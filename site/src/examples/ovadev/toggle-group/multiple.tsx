import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-ovadev";

export default function ToggleGroupMultiple() {
  return (
    <ToggleGroup multiple variant="outline" size="sm" defaultValue={["logo", "photos"]} aria-label="Press kit contents">
      <ToggleGroupItem value="logo">Logo</ToggleGroupItem>
      <ToggleGroupItem value="photos">Photos</ToggleGroupItem>
      <ToggleGroupItem value="facts">Fact sheet</ToggleGroupItem>
      <ToggleGroupItem value="fonts">Fonts</ToggleGroupItem>
    </ToggleGroup>
  );
}
