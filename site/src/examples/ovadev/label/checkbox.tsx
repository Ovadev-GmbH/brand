import { Checkbox, Label } from "@ovadev-gmbh/ui-ovadev";

export default function LabelWithCheckbox() {
  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="label-checkbox-reminders" defaultChecked />
        <Label htmlFor="label-checkbox-reminders">Send me the newsletter</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="label-checkbox-pdf" />
        <Label htmlFor="label-checkbox-pdf">Send the quote as PDF</Label>
      </div>
    </div>
  );
}
