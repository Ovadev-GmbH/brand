import { Input } from "@ovadev-gmbh/ui-internal";

export default function InputDemo() {
  return (
    <div className="flex w-full max-w-xl flex-wrap items-center gap-3">
      <Input className="w-48" placeholder="Tenant slug" autoComplete="off" />
      <Input className="w-48" type="email" placeholder="ops@ovadev.dev" />
      <Input
        className="w-48 text-label-13-mono"
        defaultValue="inv_2026_004812"
        readOnly
        aria-label="Invoice ID"
      />
      <Input className="w-48" placeholder="Region" disabled />
    </div>
  );
}
