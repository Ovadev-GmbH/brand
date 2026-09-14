import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-ovadev";

export default function ToggleGroupVertical() {
  return (
    <ToggleGroup
      orientation="vertical"
      variant="outline"
      spacing={0}
      defaultValue={["posts"]}
      aria-label="Blog view"
      className="w-40"
    >
      <ToggleGroupItem value="posts">Posts</ToggleGroupItem>
      <ToggleGroupItem value="changelog">Changelog</ToggleGroupItem>
      <ToggleGroupItem value="press">Press</ToggleGroupItem>
    </ToggleGroup>
  );
}
