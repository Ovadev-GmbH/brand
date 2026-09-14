import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-ovadev";

const requests = [
  { id: "REQ-0413", title: "Season passes for Badi Türlersee" },
  { id: "REQ-0412", title: "JANUNA for a lakeside restaurant" },
  { id: "REQ-0409", title: "Gate scanners for Hallenbad Baar" },
];

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-72 w-full max-w-xl material-base">
      <ResizablePanel defaultSize="35" minSize="20">
        <ul aria-label="Quote requests" className="flex flex-col p-1">
          {requests.map((request, index) => (
            <li key={request.id} aria-current={index === 0 || undefined} className="flex flex-col gap-0.5 px-2 py-1.5 aria-current:bg-surface-active">
              <span className="text-label-13-mono">{request.id}</span>
              <span className="truncate text-label-12 text-content-secondary">{request.title}</span>
            </li>
          ))}
        </ul>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="65" minSize="30">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="55" minSize="25">
            <div className="flex h-full flex-col gap-1 p-4">
              <h3 className="text-heading-16">Season passes for Badi Türlersee</h3>
              <p className="text-label-13 text-content-secondary">
                Gemeinde Hausen am Albis, received <span className="text-label-13-mono">2026-09-12</span> through{" "}
                <span className="text-label-13-mono">ova.dev/contact</span>.
              </p>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize="45" minSize="20">
            <pre aria-label="Request timeline" className="h-full overflow-auto bg-surface-quaternary p-3 text-label-12-mono">
              {"09-12 request received\n09-12 Philip replied\n09-14 quote sent, CHF 4'800.00"}
            </pre>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
