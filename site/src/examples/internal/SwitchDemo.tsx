import { Label, Switch } from "@ovadev-gmbh/ui-internal";

export default function SwitchDemo() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="switch-auto-deploy" defaultChecked />
      <Label htmlFor="switch-auto-deploy">Auto-deploy main</Label>
    </div>
  );
}
