import { Progress, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-januna";

const shifts = [
  { day: "Thursday", booked: 86, capacity: 110 },
  { day: "Friday", booked: 110, capacity: 110 },
  { day: "Saturday", booked: 42, capacity: 110 },
];

export default function ProgressInTable() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Dinner</TableHead>
            <TableHead className="w-48">Booked</TableHead>
            <TableHead className="text-right">Covers</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shifts.map((s) => (
            <TableRow key={s.day}>
              <TableCell>{s.day}</TableCell>
              <TableCell>
                <Progress value={s.booked} max={s.capacity} aria-label={`Covers booked for ${s.day} dinner`} />
              </TableCell>
              <TableCell className="text-right text-label-13-mono">
                {s.booked} / {s.capacity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
