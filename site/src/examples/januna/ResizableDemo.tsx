import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-januna";

const bookings = [
  { time: "19:00", name: "Okafor", party: 4 },
  { time: "19:30", name: "Keller", party: 6 },
  { time: "20:00", name: "Lindqvist", party: 2 },
];

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-72 w-full max-w-xl material-base">
      <ResizablePanel defaultSize="35" minSize="20">
        <ul aria-label="Tonight's bookings" className="flex flex-col gap-1 p-2">
          {bookings.map((booking) => (
            <li
              key={booking.name}
              aria-current={booking.name === "Keller" || undefined}
              className="flex flex-col rounded-small px-3 py-2 aria-current:bg-surface-active"
            >
              <span className="text-label-14">{booking.name}</span>
              <span className="text-label-12 text-content-secondary">
                {booking.time}, party of {booking.party}
              </span>
            </li>
          ))}
        </ul>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="65" minSize="30">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="50" minSize="25">
            <div className="flex h-full flex-col gap-1 p-5">
              <h3 className="text-heading-16">Keller, party of 6</h3>
              <p className="text-copy-14 text-content-secondary">Tonight at 19:30, T12 on the terrace.</p>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize="50" minSize="20">
            <div className="flex h-full flex-col gap-1 p-5">
              <h4 className="text-label-14">Notes</h4>
              <p className="text-copy-14 text-content-secondary">
                A birthday: the cake comes out at 21:00. One guest is vegan.
              </p>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
