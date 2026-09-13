import { Toggle } from "@ovadev-gmbh/ui-internal";

export default function ToggleDisabled() {
  return (
    <div className="flex items-center gap-2">
      <Toggle variant="outline" disabled>
        Archived
      </Toggle>
      <Toggle variant="outline" disabled defaultPressed>
        Auto-renew
      </Toggle>
    </div>
  );
}
