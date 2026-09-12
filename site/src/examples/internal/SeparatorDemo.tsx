import { Separator } from "@ovadev-gmbh/ui-internal";

export default function SeparatorDemo() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <div>
        <div className="text-label-13">billing-worker</div>
        <div className="text-copy-13 text-content-secondary">Processes invoices and dunning runs on a nightly schedule.</div>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-3 text-label-13">
        <span>Deployments</span>
        <Separator orientation="vertical" />
        <span>Incidents</span>
        <Separator orientation="vertical" />
        <span>Audit log</span>
      </div>
    </div>
  );
}
