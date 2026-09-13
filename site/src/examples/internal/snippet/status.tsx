import { Snippet } from "@ovadev-gmbh/ui-internal";

export default function SnippetStatus() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <Snippet variant="success" prompt={false} text="Deployed d-8f3a21c to ch-zrh-1 in 42s" />
      <Snippet variant="warning" prompt={false} text="3 of 12 pods restarted during the rollout of d-8f3a21c" />
      <Snippet variant="error" prompt={false} text='Migration 0042_invoices failed: column "tenant_id" does not exist' />
    </div>
  );
}
