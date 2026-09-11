import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-januna";

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-72 w-full max-w-xl rounded-2xl border"
    >
      <ResizablePanel defaultSize="55" minSize="25">
        <div className="flex h-full items-center justify-center p-6">
          <span className="text-label-14 font-medium">Floor plan</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="45" minSize="25">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="40">
            <div className="flex h-full items-center justify-center p-6">
              <span className="text-label-14 font-medium">Bookings</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="60">
            <div className="flex h-full items-center justify-center p-6">
              <span className="text-label-14 font-medium">Waitlist</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
