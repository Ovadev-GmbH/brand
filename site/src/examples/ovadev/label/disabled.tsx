import { Input, Label } from "@ovadev-gmbh/ui-ovadev";

export default function LabelDisabled() {
  return (
    <div className="group grid w-72 gap-2" data-disabled="true">
      <Label htmlFor="label-disabled-id">Company register</Label>
      <Input id="label-disabled-id" className="text-label-13-mono" defaultValue="CHE-312.484.019" disabled />
    </div>
  );
}
