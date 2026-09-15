import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-ticketova";

const log = [
  "14:03:04 rollout ch-zrh-1/billing-c3d8 GET /healthz 200",
  "14:03:04 rollout draining d-77b0e19, 42 open connections",
  "14:03:31 rollout d-77b0e19 drained, 0 requests dropped",
  "14:03:32 deploy  promoted to production by r.markant",
];

export default function ResizableVertical() {
  return (
    <ResizablePanelGroup orientation="vertical" className="h-72 w-full max-w-xl material-base">
      <ResizablePanel defaultSize="60" minSize="25">
        <div className="flex h-full flex-col gap-2 p-4">
          <h3 className="text-heading-16">Deployment d-8f3a21c</h3>
          <div className="flex items-center gap-2 text-label-13">
            <span className="text-status-success">Live in production</span>
            <span className="text-label-13-mono text-content-secondary">ch-zrh-1</span>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="40" minSize="20">
        <pre aria-label="Rollout log" className="h-full overflow-auto bg-surface-quaternary p-3 text-label-12-mono">
          {log.join("\n")}
        </pre>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
