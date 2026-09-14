import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-ovadev";

const log = [
  "14:03:04 check   ova.dev              200 in 41 ms",
  "14:03:04 check   shop.ticketova.ch    200 in 84 ms",
  "14:03:04 check   report.ticketova.ch  200 in 92 ms",
  "14:03:05 check   januna.ch            200 in 37 ms",
];

export default function ResizableVertical() {
  return (
    <ResizablePanelGroup orientation="vertical" className="h-72 w-full max-w-xl material-base">
      <ResizablePanel defaultSize="60" minSize="25">
        <div className="flex h-full flex-col gap-2 p-4">
          <h3 className="text-heading-16">Status</h3>
          <div className="flex items-center gap-2 text-label-13">
            <span className="text-status-success">All services up</span>
            <span className="text-label-13-mono text-content-secondary">2026-09-14 14:03 CEST</span>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="40" minSize="20">
        <pre aria-label="Uptime log" className="h-full overflow-auto bg-surface-quaternary p-3 text-label-12-mono">
          {log.join("\n")}
        </pre>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
