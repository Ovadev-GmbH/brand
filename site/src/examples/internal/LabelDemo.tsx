import { Checkbox, Input, Label, Switch } from "@ovadev-gmbh/ui-internal";

export default function LabelDemo() {
  return (
    <div className="grid w-full max-w-xl gap-4">
      <div className="grid gap-2">
        <Label htmlFor="label-tenant">Tenant slug</Label>
        <Input id="label-tenant" placeholder="acme-gmbh" autoComplete="off" />
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="label-audit" defaultChecked />
        <Label htmlFor="label-audit">Write this change to the audit log</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="label-maintenance" />
        <Label htmlFor="label-maintenance">Maintenance mode</Label>
      </div>
    </div>
  );
}
