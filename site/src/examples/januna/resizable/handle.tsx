import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-januna";

const sections = ["Dining room", "Terrace", "Bar"];

export default function ResizableWithHandle() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-56 w-full max-w-xl material-base">
      <ResizablePanel defaultSize="35" minSize="20">
        <ul aria-label="Floor sections" className="flex flex-col gap-0.5 p-2">
          {sections.map((section, index) => (
            <li
              key={section}
              aria-current={index === 1 || undefined}
              className="truncate rounded-small px-3 py-2 text-label-14 aria-current:bg-surface-active"
            >
              {section}
            </li>
          ))}
        </ul>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="65" minSize="30">
        <div className="flex h-full flex-col gap-1 p-4">
          <h3 className="text-heading-16">Terrace</h3>
          <p className="text-copy-14 text-content-secondary">
            8 tables, 32 seats. 5 tables booked for 19:30, Terrace 3 held for Keller.
          </p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
