import { Checkbox, Label } from "@ovadev-gmbh/ui-januna";

export default function CheckboxDemo() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id="checkbox-reminder" defaultChecked />
      <Label htmlFor="checkbox-reminder">Send the guest a reminder the day before</Label>
    </div>
  );
}
