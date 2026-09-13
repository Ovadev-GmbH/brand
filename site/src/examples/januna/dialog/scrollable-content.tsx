import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ovadev-gmbh/ui-januna";

const visits = [
  { date: "2026-09-05", party: 6, table: "T12", note: "Birthday of her mother. Asked for the terrace next time." },
  { date: "2026-08-21", party: 2, table: "Terrace 3", note: "Nut allergy noted again." },
  { date: "2026-08-02", party: 4, table: "T8", note: "Arrived 20 minutes late; table was held." },
  { date: "2026-07-18", party: 2, table: "Bar 1", note: "Walk-in, seated at the bar." },
  { date: "2026-06-27", party: 8, table: "T14", note: "Deposit of CHF 400.00 paid and used." },
  { date: "2026-06-06", party: 2, table: "T4", note: "No note." },
  { date: "2026-05-15", party: 4, table: "T8", note: "Moved from 19:00 to 19:30 by phone." },
  { date: "2026-04-24", party: 3, table: "T6", note: "High chair at the table." },
  { date: "2026-03-28", party: 2, table: "T2", note: "Anniversary. Dessert on the house." },
  { date: "2026-02-14", party: 2, table: "T1", note: "First visit." },
];

export default function DialogScrollableContent() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Guest history</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nora Keller</DialogTitle>
          <DialogDescription>10 visits since February, most recent first.</DialogDescription>
        </DialogHeader>
        <div className="-mx-8 max-h-[50vh] overflow-y-auto px-8">
          {visits.map((visit) => (
            <div key={visit.date} className="flex flex-col gap-1 border-b border-divider py-3 last:border-b-0">
              <span className="text-label-12-mono text-content-tertiary">
                {visit.date} · {visit.party} guests · {visit.table}
              </span>
              <p className="m-0 text-copy-14">{visit.note}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
