import { Input, Label } from "@ovadev-gmbh/ui-ticketova";

export default function LabelDisabled() {
  return (
    <div className="group grid w-72 gap-2" data-disabled="true">
      <Label htmlFor="label-disabled-id">Tenant ID</Label>
      <Input id="label-disabled-id" className="text-label-13-mono" defaultValue="tnt_8f2k1q" disabled />
    </div>
  );
}
