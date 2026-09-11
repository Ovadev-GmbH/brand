import * as React from "react";
import { Label, Switch } from "@ovadev-gmbh/ui-januna";

export default function SwitchDemo() {
  const [online, setOnline] = React.useState(true);

  return (
    <div className="grid w-full max-w-xl gap-4">
      <div className="flex items-center gap-3">
        <Switch id="online-bookings" checked={online} onCheckedChange={setOnline} />
        <Label htmlFor="online-bookings">Online bookings {online ? "open" : "paused"}</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="waitlist" size="sm" defaultChecked />
        <Label htmlFor="waitlist">Waitlist when the shift is full</Label>
      </div>
      <div className="flex items-center justify-between rounded-2xl border p-4">
        <div className="grid gap-1">
          <Label htmlFor="deposit">Require a deposit</Label>
          <p className="text-copy-13 text-content-secondary">
            Parties of 8 or more pay a small deposit to hold the table.
          </p>
        </div>
        <Switch id="deposit" />
      </div>
    </div>
  );
}
