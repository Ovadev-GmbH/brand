import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-ovadev";

const customers = [
  { slug: "tuerlersee", product: "TICKETOVA" },
  { slug: "hallenbad-baar", product: "TICKETOVA" },
  { slug: "seerose-zug", product: "JANUNA" },
];

export default function ResizableWithHandle() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-56 w-full max-w-xl material-base">
      <ResizablePanel defaultSize="35" minSize="20">
        <ul aria-label="Customers" className="flex flex-col p-1">
          {customers.map((customer, index) => (
            <li
              key={customer.slug}
              aria-current={index === 0 || undefined}
              className="truncate px-2 py-1.5 text-label-13-mono aria-current:bg-surface-active"
            >
              {customer.slug}
            </li>
          ))}
        </ul>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="65" minSize="30">
        <div className="flex h-full flex-col gap-1 p-4">
          <h3 className="text-heading-16">tuerlersee</h3>
          <p className="text-label-13 text-content-secondary">
            Badi Türlersee, Hausen am Albis. On TICKETOVA since <span className="text-label-13-mono">2024-05-01</span>.
          </p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
