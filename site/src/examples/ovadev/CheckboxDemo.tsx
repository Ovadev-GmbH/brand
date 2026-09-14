import { Checkbox, Label } from "@ovadev-gmbh/ui-ovadev";

export default function CheckboxDemo() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id="checkbox-reminders" defaultChecked />
      <Label htmlFor="checkbox-reminders">Subscribe to the newsletter</Label>
    </div>
  );
}
