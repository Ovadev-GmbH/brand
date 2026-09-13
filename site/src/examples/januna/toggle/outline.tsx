import { Toggle } from "@ovadev-gmbh/ui-januna";

export default function ToggleOutline() {
  return (
    <div className="flex items-center gap-2">
      <Toggle variant="outline">Show cancelled</Toggle>
      <Toggle variant="outline" defaultPressed>
        Deposits only
      </Toggle>
    </div>
  );
}
