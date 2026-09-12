import * as React from "react";
import { Label, Switch } from "@ovadev-gmbh/ui-internal";

export default function SwitchDemo() {
  const [maintenance, setMaintenance] = React.useState(false);

  return (
    <div className="grid w-full max-w-xl gap-4">
      <div className="flex items-center gap-3">
        <Switch id="switch-maintenance" checked={maintenance} onCheckedChange={setMaintenance} />
        <Label htmlFor="switch-maintenance">
          Maintenance mode {maintenance ? "on" : "off"}
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="switch-autodeploy" size="sm" defaultChecked />
        <Label htmlFor="switch-autodeploy">Auto-deploy main</Label>
      </div>
      <div className="flex items-center justify-between border p-3">
        <div className="grid gap-1">
          <Label htmlFor="switch-dunning">Dunning emails</Label>
          <p className="text-copy-13 text-content-secondary">
            Remind the tenant at 3, 7 and 14 days after an invoice is overdue.
          </p>
        </div>
        <Switch id="switch-dunning" defaultChecked />
      </div>
    </div>
  );
}
