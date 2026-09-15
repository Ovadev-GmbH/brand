import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-ticketova";

export default function CollapsibleDisabled() {
  return (
    <Collapsible disabled className="flex w-96 flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-label-13">Build logs</span>
          <span className="text-label-12 text-content-tertiary">
            Deployment <span className="text-label-12-mono">b31e07d</span> is queued behind 2 builds.
          </span>
        </div>
        <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>Show logs</CollapsibleTrigger>
      </div>
      <CollapsibleContent className="text-label-13-mono text-content-secondary">No output yet.</CollapsibleContent>
    </Collapsible>
  );
}
