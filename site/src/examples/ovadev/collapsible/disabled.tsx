import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-ovadev";

export default function CollapsibleDisabled() {
  return (
    <Collapsible disabled className="flex w-96 flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-label-13">Press kit</span>
          <span className="text-label-12 text-content-tertiary">
            The ZIP for release <span className="text-label-12-mono">2026.9</span> is still being written.
          </span>
        </div>
        <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>Show files</CollapsibleTrigger>
      </div>
      <CollapsibleContent className="text-label-13-mono text-content-secondary">No files yet.</CollapsibleContent>
    </Collapsible>
  );
}
