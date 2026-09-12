import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-internal";

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-64 w-full max-w-xl border">
      <ResizablePanel defaultSize="60" minSize="25">
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-label-13">Deployments</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="40" minSize="25">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="50">
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-label-13">Logs</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="50">
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-label-13-mono text-content-secondary">d-8f3a21c</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
