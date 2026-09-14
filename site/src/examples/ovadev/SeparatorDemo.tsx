import { Separator } from "@ovadev-gmbh/ui-ovadev";

export default function SeparatorDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-heading-16">Newsletter</h3>
        <p className="text-copy-13 text-content-secondary">Goes out on the first Monday of the month to everyone who signed up on ova.dev.</p>
      </div>
      <Separator />
      <p className="text-copy-13">
        Last issue <span className="text-copy-13-mono">2026-09-07 09:00 CEST</span>:{" "}
        <span className="text-copy-13-mono">412</span> recipients, <span className="text-copy-13-mono">0</span> bounced.
      </p>
    </div>
  );
}
