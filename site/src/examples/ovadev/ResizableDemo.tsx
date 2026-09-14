import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-ovadev";

const incidents = [
  { id: "INC-0413", title: "502s on /v1/invoices" },
  { id: "INC-0412", title: "Slow audit log export" },
  { id: "INC-0409", title: "Webhook retries delayed" },
];

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-72 w-full max-w-xl material-base">
      <ResizablePanel defaultSize="35" minSize="20">
        <ul aria-label="Incidents" className="flex flex-col p-1">
          {incidents.map((incident, index) => (
            <li key={incident.id} aria-current={index === 0 || undefined} className="flex flex-col gap-0.5 px-2 py-1.5 aria-current:bg-surface-active">
              <span className="text-label-13-mono">{incident.id}</span>
              <span className="truncate text-label-12 text-content-secondary">{incident.title}</span>
            </li>
          ))}
        </ul>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="65" minSize="30">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="55" minSize="25">
            <div className="flex h-full flex-col gap-1 p-4">
              <h3 className="text-heading-16">502s on /v1/invoices</h3>
              <p className="text-label-13 text-content-secondary">
                acme-logistics, since deployment <span className="text-label-13-mono">d-8f3a21c</span> in{" "}
                <span className="text-label-13-mono">ch-zrh-1</span>.
              </p>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize="45" minSize="20">
            <pre aria-label="Incident timeline" className="h-full overflow-auto bg-surface-quaternary p-3 text-label-12-mono">
              {"08:30 d-8f3a21c promoted\n08:41 first 502 reported\n08:44 rollback started"}
            </pre>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
