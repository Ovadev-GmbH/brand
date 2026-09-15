import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-ticketova";

const tenants = [
  { slug: "acme-logistics", plan: "Scale" },
  { slug: "bergwerk-ag", plan: "Team" },
  { slug: "helvetia-labs", plan: "Starter" },
];

export default function ResizableWithHandle() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-56 w-full max-w-xl material-base">
      <ResizablePanel defaultSize="35" minSize="20">
        <ul aria-label="Tenants" className="flex flex-col p-1">
          {tenants.map((tenant, index) => (
            <li
              key={tenant.slug}
              aria-current={index === 0 || undefined}
              className="truncate px-2 py-1.5 text-label-13-mono aria-current:bg-surface-active"
            >
              {tenant.slug}
            </li>
          ))}
        </ul>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="65" minSize="30">
        <div className="flex h-full flex-col gap-1 p-4">
          <h3 className="text-heading-16">acme-logistics</h3>
          <p className="text-label-13 text-content-secondary">
            Scale, billed monthly in CHF. Next invoice <span className="text-label-13-mono">2026-10-01</span>.
          </p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
