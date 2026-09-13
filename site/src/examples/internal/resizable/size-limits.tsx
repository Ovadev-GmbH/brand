import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-internal";

export default function ResizableSizeLimits() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-48 w-full max-w-xl material-base">
      <ResizablePanel defaultSize="30" minSize={180} maxSize="50">
        <div className="flex h-full flex-col gap-1 p-4">
          <span className="text-label-13">Filters</span>
          <span className="text-label-12-mono text-content-secondary">min 180px, max 50%</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel minSize="40">
        <div className="flex h-full flex-col gap-1 p-4">
          <span className="text-label-13">Invoices</span>
          <span className="text-label-12-mono text-content-secondary">min 40%</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
