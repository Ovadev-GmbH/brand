import { Checkbox, Label } from "@ovadev-gmbh/ui-ticketova";

export default function LabelWithCheckbox() {
  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="label-checkbox-reminders" defaultChecked />
        <Label htmlFor="label-checkbox-reminders">Send payment reminders</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="label-checkbox-pdf" />
        <Label htmlFor="label-checkbox-pdf">Attach the invoice as PDF</Label>
      </div>
    </div>
  );
}
