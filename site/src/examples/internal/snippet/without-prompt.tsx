import { Snippet } from "@ovadev-gmbh/ui-internal";

export default function SnippetWithoutPrompt() {
  return (
    <div className="grid w-full max-w-md gap-3">
      <div className="grid gap-1.5">
        <span className="text-label-13 text-content-secondary">Tenant ID</span>
        <Snippet prompt={false} text="ten_01J8Z4Q6RKX2BERGWERK" />
      </div>
      <div className="grid gap-1.5">
        <span className="text-label-13 text-content-secondary">Deploy hook</span>
        <Snippet prompt={false} text="https://hooks.ova.dev/t/bergwerk-ag/deploy" />
      </div>
    </div>
  );
}
