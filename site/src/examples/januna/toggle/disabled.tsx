import { Toggle } from "@ovadev-gmbh/ui-januna";

export default function ToggleDisabled() {
  return (
    <div className="flex items-center gap-2">
      <Toggle variant="outline" disabled>
        Terrace
      </Toggle>
      <Toggle variant="outline" disabled defaultPressed>
        Walk-ins
      </Toggle>
    </div>
  );
}
