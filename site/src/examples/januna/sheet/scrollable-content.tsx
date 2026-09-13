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
} from "@ovadev-gmbh/ui-januna";

const tables = ["T12", "T9", "Terrace 3", "T4"];
const times = ["19:30", "20:00", "19:00"];

const visits = Array.from({ length: 24 }, (_, i) => ({
  date: new Date(Date.UTC(2026, 8, 6 - i * 7)).toISOString().slice(0, 10),
  time: times[i % times.length],
  table: tables[i % tables.length],
  party: 2 + (i % 3) * 2,
}));

export default function SheetScrollableContent() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Visit history</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Nora Keller</SheetTitle>
          <SheetDescription>24 visits since March 2026, never a no-show.</SheetDescription>
        </SheetHeader>
        <ul className="m-0 min-h-0 flex-1 list-none overflow-y-auto border-y border-divider px-8 py-0">
          {visits.map((v) => (
            <li key={v.date} className="flex items-center justify-between gap-4 border-b border-divider py-3 last:border-b-0">
              <span className="text-label-14">
                {v.table} · party of {v.party}
              </span>
              <span className="text-label-13-mono text-content-secondary">
                {v.date} {v.time}
              </span>
            </li>
          ))}
        </ul>
        <SheetFooter>
          <Button>New booking</Button>
          <SheetClose render={<Button variant="outline" />}>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
