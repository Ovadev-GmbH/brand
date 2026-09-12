import { Checkbox, Label } from "@ovadev-gmbh/ui-internal";

export default function CheckboxDemo() {
  return (
    <div className="grid w-full max-w-xl gap-3">
      <div className="flex items-start gap-3">
        <Checkbox id="checkbox-audit" defaultChecked />
        <div className="grid gap-1">
          <Label htmlFor="checkbox-audit">Write to the audit log</Label>
          <p className="text-copy-13 text-content-secondary">
            Every change to a tenant's plan is recorded with the actor and a diff.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="checkbox-notify" />
        <Label htmlFor="checkbox-notify">Notify the on-call engineer</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="checkbox-regions" indeterminate />
        <Label htmlFor="checkbox-regions">Some regions selected</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="checkbox-locked" disabled defaultChecked />
        <Label htmlFor="checkbox-locked">Locked by billing</Label>
      </div>
    </div>
  );
}
