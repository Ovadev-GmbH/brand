import { StatusDot, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-januna";

const tables = [
  { name: "T7", area: "Dining room", state: "active", word: "Seated", covers: 4 },
  { name: "T12", area: "Dining room", state: "ready", word: "Confirmed", covers: 6 },
  { name: "T14", area: "Dining room", state: "pending", word: "Waitlist", covers: 2 },
  { name: "Terrace 3", area: "Terrace", state: "error", word: "No-show", covers: 8 },
] as const;

export default function StatusDotInTable() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Table</TableHead>
            <TableHead>Area</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Covers</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tables.map((t) => (
            <TableRow key={t.name}>
              <TableCell>{t.name}</TableCell>
              <TableCell className="text-content-secondary">{t.area}</TableCell>
              <TableCell>
                <span className="flex items-center gap-2">
                  <StatusDot state={t.state} titlePrefix={`Booking on ${t.name}`} />
                  {t.word}
                </span>
              </TableCell>
              <TableCell className="text-right text-label-13-mono">{t.covers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
