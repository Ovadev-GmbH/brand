import { Toggle } from "@ovadev-gmbh/ui-ovadev";

export default function ToggleOutline() {
  return (
    <div className="flex items-center gap-2">
      <Toggle variant="outline">Drafts</Toggle>
      <Toggle variant="outline" defaultPressed>
        German only
      </Toggle>
    </div>
  );
}
