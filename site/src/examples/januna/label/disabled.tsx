import { Input, Label } from "@ovadev-gmbh/ui-januna";

export default function LabelDisabled() {
  return (
    <div className="group grid w-72 gap-2" data-disabled="true">
      <Label htmlFor="label-disabled-table">Table</Label>
      <Input id="label-disabled-table" defaultValue="Terrace 3" disabled />
    </div>
  );
}
