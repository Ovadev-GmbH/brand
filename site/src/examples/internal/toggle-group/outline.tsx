import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-internal";

export default function ToggleGroupOutline() {
  return (
    <ToggleGroup variant="outline" defaultValue={["production"]} aria-label="Environment">
      <ToggleGroupItem value="production">Production</ToggleGroupItem>
      <ToggleGroupItem value="staging">Staging</ToggleGroupItem>
      <ToggleGroupItem value="preview">Preview</ToggleGroupItem>
    </ToggleGroup>
  );
}
