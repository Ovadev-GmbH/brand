import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-januna";

const notes = [
  "Nut allergy, one guest. The kitchen has been told.",
  "Celebrating a 40th birthday. They bring a cake for 21:00.",
  "Asked for Terrace 3 if the weather holds, T12 otherwise.",
  "Deposit of CHF 120.00 paid on 9 September.",
];

export default function ResizableVertical() {
  return (
    <ResizablePanelGroup orientation="vertical" className="h-72 w-full max-w-xl overflow-hidden material-base">
      <ResizablePanel defaultSize="40" minSize="25">
        <div className="flex h-full flex-col gap-1 p-4">
          <h3 className="text-heading-16">Keller, party of 6</h3>
          <p className="text-label-14 text-content-secondary">Friday 19:30, Terrace 3</p>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="60" minSize="20">
        <ul aria-label="Notes on this booking" className="flex h-full flex-col gap-2 overflow-auto bg-surface-secondary p-4 text-copy-14">
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
