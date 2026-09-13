import { Input, Label } from "@ovadev-gmbh/ui-internal";

export default function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="label-demo-tenant">Tenant slug</Label>
      <Input id="label-demo-tenant" placeholder="acme-logistics" autoComplete="off" spellCheck={false} />
    </div>
  );
}
