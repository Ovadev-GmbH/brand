import { Badge, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-januna";

const bookings = [
  { time: "19:00", guest: "Brunner", table: "T7", covers: 4, walkIn: false },
  { time: "19:10", guest: "Graf", table: "T2", covers: 3, walkIn: true },
  { time: "19:30", guest: "Keller", table: "T12", covers: 6, walkIn: false },
];

export default function BadgeInTable() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>Guest</TableHead>
            <TableHead>Table</TableHead>
            <TableHead className="text-right">Covers</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((b) => (
            <TableRow key={b.time}>
              <TableCell className="text-label-13-mono">{b.time}</TableCell>
              <TableCell>
                <span className="flex items-center gap-2">
                  {b.guest}
                  {b.walkIn ? <Badge variant="secondary">Walk-in</Badge> : null}
                </span>
              </TableCell>
              <TableCell className="text-content-secondary">{b.table}</TableCell>
              <TableCell className="text-right text-label-13-mono">{b.covers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
