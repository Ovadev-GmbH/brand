import { Snippet } from "@ovadev-gmbh/ui-januna";

export default function SnippetWithoutPrompt() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <div className="grid gap-2">
        <span className="text-label-13 text-content-secondary">Restaurant ID</span>
        <Snippet prompt={false} text="rst_01J8Z4Q6ZUMHIRSCHEN" />
      </div>
      <div className="grid gap-2">
        <span className="text-label-13 text-content-secondary">Booking reference</span>
        <Snippet prompt={false} text="JAN-2026-4821" />
      </div>
    </div>
  );
}
