import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ovadev-gmbh/ui-internal";

const events = Array.from({ length: 16 }, (_, i) => ({
  at: `2026-09-13 ${String(17 - Math.floor(i / 2)).padStart(2, "0")}:${String(58 - i * 3).padStart(2, "0")}`,
  who: i % 3 === 0 ? "robin@ova.dev" : i % 3 === 1 ? "philip@ova.dev" : "system",
  what: ["Rotated the publishable key", "Changed the plan to Scale", "Sent INV-2026-0142", "Added a billing contact"][i % 4],
}));

export default function DialogStickyFooter() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>View audit log</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Audit log</DialogTitle>
          <DialogDescription>Everything that changed on acme-logistics today.</DialogDescription>
        </DialogHeader>
        <ul className="-mx-6 m-0 max-h-[50vh] list-none overflow-y-auto border-y border-divider p-0 px-6">
          {events.map((e) => (
            <li key={e.at} className="flex flex-col gap-0.5 border-b border-divider py-2.5 last:border-b-0">
              <span className="text-label-13">{e.what}</span>
              <span className="text-label-12-mono text-content-tertiary">
                {e.at} · {e.who}
              </span>
            </li>
          ))}
        </ul>
        <DialogFooter>
          <Button variant="outline">Export CSV</Button>
          <DialogClose render={<Button />}>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
