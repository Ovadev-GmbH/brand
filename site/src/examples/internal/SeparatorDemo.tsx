import { Separator } from "@ovadev-gmbh/ui-internal";

export default function SeparatorDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-heading-16">Nightly invoice run</h3>
        <p className="text-copy-13 text-content-secondary">Issues the invoices for every tenant on a monthly plan.</p>
      </div>
      <Separator />
      <p className="text-copy-13">
        Last run <span className="text-copy-13-mono">2026-09-14 02:00 CEST</span>:{" "}
        <span className="text-copy-13-mono">38</span> invoices issued, <span className="text-copy-13-mono">0</span> failed.
      </p>
    </div>
  );
}
