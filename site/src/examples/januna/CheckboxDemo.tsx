import { Checkbox, Label } from "@ovadev-gmbh/ui-januna";

export default function CheckboxDemo() {
  return (
    <div className="grid w-full max-w-xl gap-3">
      <div className="flex items-start gap-3">
        <Checkbox id="hold-table" defaultChecked />
        <div className="grid gap-1">
          <Label htmlFor="hold-table">Hold the table for 15 minutes</Label>
          <p className="text-copy-13 text-content-secondary">
            Late guests keep their table until a quarter past the booking time.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="notify-guests" />
        <Label htmlFor="notify-guests">Send guests a confirmation</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="indeterminate" indeterminate />
        <Label htmlFor="indeterminate">Some shifts selected</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Walk-ins only</Label>
      </div>
    </div>
  );
}
