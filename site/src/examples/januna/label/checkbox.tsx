import { Checkbox, Label } from "@ovadev-gmbh/ui-januna";

export default function LabelWithCheckbox() {
  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="label-checkbox-deposit" defaultChecked />
        <Label htmlFor="label-checkbox-deposit">Ask for a deposit on parties of 6 or more</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="label-checkbox-reminder" />
        <Label htmlFor="label-checkbox-reminder">Send a reminder on the morning of the booking</Label>
      </div>
    </div>
  );
}
