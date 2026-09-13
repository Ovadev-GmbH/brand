import * as React from "react";
import { Field, FieldContent, FieldDescription, FieldLabel, Spinner, Switch } from "@ovadev-gmbh/ui-januna";

export default function SwitchControlled() {
  const [open, setOpen] = React.useState(true);
  const [saving, setSaving] = React.useState(false);

  function change(next: boolean) {
    setSaving(true);
    // Stands in for the request: the switch moves when the change is saved.
    setTimeout(() => {
      setOpen(next);
      setSaving(false);
    }, 900);
  }

  return (
    <Field orientation="horizontal" className="w-full max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-controlled-online">Online bookings</FieldLabel>
        <FieldDescription>
          {saving
            ? "Saving…"
            : open
              ? "Guests can book tonight's dinner online."
              : "Paused. The host takes bookings by phone and at the door."}
        </FieldDescription>
      </FieldContent>
      {saving ? <Spinner /> : null}
      <Switch id="switch-controlled-online" checked={open} onCheckedChange={change} disabled={saving} />
    </Field>
  );
}
