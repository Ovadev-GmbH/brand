import { Label, Switch } from "@ovadev-gmbh/ui-internal";

export default function SwitchSize() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Switch id="switch-size-sm" size="sm" defaultChecked />
        <Label htmlFor="switch-size-sm">Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="switch-size-default" defaultChecked />
        <Label htmlFor="switch-size-default">Default</Label>
      </div>
    </div>
  );
}
