import { Snippet } from "@ovadev-gmbh/ui-internal";

const steps = ["ova tenants use helvetia-labs", "ova keys rotate sk_live_9c2e --grace 24h"];

export default function SnippetCopyText() {
  return (
    <div className="w-full max-w-xl">
      <Snippet text={steps} copyText={steps.join(" && ")} />
    </div>
  );
}
