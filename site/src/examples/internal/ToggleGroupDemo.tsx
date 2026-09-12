import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-internal";
import { ListIcon, SquaresFourIcon } from "@phosphor-icons/react";

export default function ToggleGroupDemo() {
  return (
    <div className="flex w-full max-w-xl flex-wrap items-center gap-3">
      <ToggleGroup variant="outline" spacing={0} defaultValue={["24h"]}>
        <ToggleGroupItem value="1h">1h</ToggleGroupItem>
        <ToggleGroupItem value="24h">24h</ToggleGroupItem>
        <ToggleGroupItem value="7d">7d</ToggleGroupItem>
        <ToggleGroupItem value="30d">30d</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup multiple size="sm" defaultValue={["error", "warn"]}>
        <ToggleGroupItem value="error">error</ToggleGroupItem>
        <ToggleGroupItem value="warn">warn</ToggleGroupItem>
        <ToggleGroupItem value="info">info</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant="outline" spacing={0} defaultValue={["list"]}>
        <ToggleGroupItem value="list" aria-label="List view">
          <ListIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="grid" aria-label="Grid view">
          <SquaresFourIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
