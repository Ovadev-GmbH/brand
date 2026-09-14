import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-ovadev";

export default function ToggleGroupOutline() {
  return (
    <ToggleGroup variant="outline" defaultValue={["en"]} aria-label="Language">
      <ToggleGroupItem value="en">English</ToggleGroupItem>
      <ToggleGroupItem value="de">Deutsch</ToggleGroupItem>
      <ToggleGroupItem value="fr">Français</ToggleGroupItem>
    </ToggleGroup>
  );
}
