import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-ovadev";

export default function ToggleGroupDisabled() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ToggleGroup variant="outline" disabled defaultValue={["ticketova"]} aria-label="Product">
        <ToggleGroupItem value="ticketova">TICKETOVA</ToggleGroupItem>
        <ToggleGroupItem value="januna">JANUNA</ToggleGroupItem>
        <ToggleGroupItem value="consulting">Consulting</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant="outline" defaultValue={["ova.dev"]} aria-label="Domain">
        <ToggleGroupItem value="ova.dev" className="text-label-13-mono">
          ova.dev
        </ToggleGroupItem>
        <ToggleGroupItem value="ovadev.ch" className="text-label-13-mono" disabled>
          ovadev.ch
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
