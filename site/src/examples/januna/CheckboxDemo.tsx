import * as React from "react";
import { Checkbox, Label } from "@ovadev-gmbh/ui-januna";

export default function CheckboxDemo() {
  const [confirmed, setConfirmed] = React.useState(true);

  return (
    <div className="grid max-w-[640px] gap-4">
      <div className="flex items-center gap-3">
        <Checkbox id="notify-guests" />
        <Label htmlFor="notify-guests">Send guests a confirmation</Label>
      </div>

      <div className="flex items-start gap-3">
        <Checkbox id="hold-table" defaultChecked />
        <div className="grid gap-1">
          <Label htmlFor="hold-table">Hold the table for 15 minutes</Label>
          <p className="text-sm text-muted-foreground">
            Late guests keep their table until a quarter past the booking time.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Checkbox
          id="controlled"
          checked={confirmed}
          onCheckedChange={(checked) => setConfirmed(checked)}
        />
        <Label htmlFor="controlled">
          Booking confirmed
          <span className="text-muted-foreground">({confirmed ? "yes" : "no"})</span>
        </Label>
      </div>

      <div className="flex items-center gap-3">
        <Checkbox id="indeterminate" indeterminate />
        <Label htmlFor="indeterminate">Some shifts selected</Label>
      </div>

      <div className="flex items-center gap-3">
        <Checkbox id="invalid" aria-invalid />
        <Label htmlFor="invalid">Accept the cancellation policy</Label>
      </div>

      <div className="flex items-center gap-3">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Walk-ins only (disabled)</Label>
      </div>
    </div>
  );
}
