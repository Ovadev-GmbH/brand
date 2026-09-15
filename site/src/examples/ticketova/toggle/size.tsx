import { Toggle } from "@ovadev-gmbh/ui-ticketova";

export default function ToggleSize() {
  return (
    <div className="flex items-center gap-2">
      <Toggle variant="outline" size="sm">
        Small
      </Toggle>
      <Toggle variant="outline">Default</Toggle>
      <Toggle variant="outline" size="lg">
        Large
      </Toggle>
    </div>
  );
}
