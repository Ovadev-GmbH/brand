import { Label, Switch } from "@ovadev-gmbh/ui-ovadev";

export default function SwitchDemo() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="switch-newsletter" defaultChecked />
      <Label htmlFor="switch-newsletter">Newsletter</Label>
    </div>
  );
}
