import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ovadev-gmbh/ui-ovadev";

const releases = [
  { version: "3.8.0", date: "2026-09-10", notes: "Season passes can be renewed from the shop." },
  { version: "3.7.2", date: "2026-09-04", notes: "Admission control keeps working offline for up to four hours." },
  { version: "3.7.1", date: "2026-08-29", notes: "The reporting page shows entries per hour." },
  { version: "3.7.0", date: "2026-08-22", notes: "Refunds go back to the card that paid." },
  { version: "3.6.3", date: "2026-08-15", notes: "Family tickets are limited to two adults." },
  { version: "3.6.2", date: "2026-08-08", notes: "Prices round to five centimes, as required." },
  { version: "3.6.1", date: "2026-08-01", notes: "Turnstiles report their state every 30 seconds." },
  { version: "3.6.0", date: "2026-07-25", notes: "The shop is available in French." },
  { version: "3.5.4", date: "2026-07-18", notes: "QR codes print on thermal paper without a margin." },
  { version: "3.5.3", date: "2026-07-11", notes: "Strandbad Türlersee is on the shop's start page." },
];

export default function DialogScrollableContent() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>What&rsquo;s new</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Release notes</DialogTitle>
          <DialogDescription>The last ten releases of TICKETOVA.</DialogDescription>
        </DialogHeader>
        <div className="-mx-6 max-h-[50vh] overflow-y-auto px-6">
          {releases.map((r) => (
            <div key={r.version} className="flex flex-col gap-1 border-b border-divider py-3 last:border-b-0">
              <span className="text-label-12-mono text-content-tertiary">
                {r.version} · {r.date}
              </span>
              <p className="m-0 text-copy-14">{r.notes}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
