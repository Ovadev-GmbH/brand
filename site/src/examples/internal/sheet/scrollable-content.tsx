import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@ovadev-gmbh/ui-internal";

const actions = ["Sent INV-2026-0142", "Rotated sk_live_4f9a", "Changed the plan to Scale", "Invited lena@ova.dev"];

const events = Array.from({ length: 24 }, (_, i) => ({
  id: `evt_${(4096 - i * 37).toString(16)}`,
  at: `2026-09-${String(13 - Math.floor(i / 4)).padStart(2, "0")} ${String(18 - (i % 4) * 3).padStart(2, "0")}:${String((i * 7) % 60).padStart(2, "0")}`,
  what: actions[i % actions.length],
}));

export default function SheetScrollableContent() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>View activity</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Activity</SheetTitle>
          <SheetDescription>The last 24 events on acme-logistics.</SheetDescription>
        </SheetHeader>
        <ul className="m-0 min-h-0 flex-1 list-none overflow-y-auto border-y border-divider px-4 py-0">
          {events.map((e) => (
            <li key={e.id} className="flex flex-col gap-0.5 border-b border-divider py-2.5 last:border-b-0">
              <span className="text-label-13">{e.what}</span>
              <span className="text-label-12-mono text-content-tertiary">
                {e.at} · {e.id}
              </span>
            </li>
          ))}
        </ul>
        <SheetFooter>
          <Button variant="outline">Export CSV</Button>
          <SheetClose render={<Button />}>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
