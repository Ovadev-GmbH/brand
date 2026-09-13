import { Button, Snippet } from "@ovadev-gmbh/ui-januna";

export default function SnippetEmpty() {
  return (
    <div className="flex w-full max-w-md items-center gap-2">
      <Snippet prompt={false} text="" placeholder="No gift card code issued yet" />
      <Button variant="outline">Issue code</Button>
    </div>
  );
}
