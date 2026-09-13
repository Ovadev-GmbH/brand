import { Toggle } from "@ovadev-gmbh/ui-internal";

export default function ToggleOutline() {
  return (
    <div className="flex items-center gap-2">
      <Toggle variant="outline">Archived</Toggle>
      <Toggle variant="outline" defaultPressed>
        Overdue only
      </Toggle>
    </div>
  );
}
