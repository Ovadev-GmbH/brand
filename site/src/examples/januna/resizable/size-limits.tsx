import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-januna";

export default function ResizableSizeLimits() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-48 w-full max-w-xl material-base">
      <ResizablePanel defaultSize="30" minSize={180} maxSize="50">
        <div className="flex h-full flex-col gap-1 p-4">
          <span className="text-label-14">Waitlist</span>
          <span className="text-label-12 text-content-secondary">At least 180px, at most 50%</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel minSize="40">
        <div className="flex h-full flex-col gap-1 p-4">
          <span className="text-label-14">Floor plan</span>
          <span className="text-label-12 text-content-secondary">At least 40%</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
