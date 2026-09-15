import * as React from "react";
import { Field, FieldContent, FieldDescription, FieldLabel, Spinner, Switch } from "@ovadev-gmbh/ui-ticketova";

export default function SwitchControlled() {
  const [maintenance, setMaintenance] = React.useState(false);
  const [saving, setSaving] = React.useState(false);

  function change(next: boolean) {
    setSaving(true);
    // Stands in for the request: the switch moves when the change has gone through.
    setTimeout(() => {
      setMaintenance(next);
      setSaving(false);
    }, 900);
  }

  return (
    <Field orientation="horizontal" className="w-full max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-controlled-maintenance">Maintenance mode</FieldLabel>
        <FieldDescription>
          {saving
            ? "Saving…"
            : maintenance
              ? "acme-logistics shows the maintenance page."
              : "acme-logistics is serving traffic."}
        </FieldDescription>
      </FieldContent>
      {saving ? <Spinner /> : null}
      <Switch
        id="switch-controlled-maintenance"
        checked={maintenance}
        onCheckedChange={change}
        disabled={saving}
      />
    </Field>
  );
}
