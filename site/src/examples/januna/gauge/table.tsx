import { Gauge, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-januna";

const shifts = [
  { day: "Thursday", shift: "Dinner", booked: 86, capacity: 110 },
  { day: "Friday", shift: "Dinner", booked: 110, capacity: 110 },
  { day: "Saturday", shift: "Lunch", booked: 18, capacity: 60 },
];

export default function GaugeInTable() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Day</TableHead>
            <TableHead>Shift</TableHead>
            <TableHead className="text-right">Covers</TableHead>
            <TableHead className="text-right">Booked</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shifts.map((s) => {
            const booked = Math.round((s.booked / s.capacity) * 100);
            return (
              <TableRow key={s.day}>
                <TableCell>{s.day}</TableCell>
                <TableCell className="text-content-secondary">{s.shift}</TableCell>
                <TableCell className="text-right text-label-13-mono">
                  {s.booked} / {s.capacity}
                </TableCell>
                <TableCell>
                  <span className="flex items-center justify-end gap-2">
                    <Gauge value={booked} size="tiny" aria-label={`${s.day} ${s.shift} booked`} />
                    <span className="w-10 text-right text-label-13-mono">{booked}%</span>
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
