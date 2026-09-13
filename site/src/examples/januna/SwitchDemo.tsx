import { Label, Switch } from "@ovadev-gmbh/ui-januna";

export default function SwitchDemo() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="switch-online-bookings" defaultChecked />
      <Label htmlFor="switch-online-bookings">Online bookings</Label>
    </div>
  );
}
