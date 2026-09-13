import { Button, Snippet } from "@ovadev-gmbh/ui-internal";

export default function SnippetEmpty() {
  return (
    <div className="flex w-full max-w-md items-center gap-2">
      <Snippet prompt={false} text="" placeholder="No deploy hook for helvetia-labs yet" />
      <Button variant="outline">Create hook</Button>
    </div>
  );
}
