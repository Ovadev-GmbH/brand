import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-januna";

const bookings = [
  { time: "18:00", table: "Table 3", guest: "M. Keller", covers: 2, status: "Seated" },
  { time: "18:30", table: "Table 7", guest: "A. Rossi", covers: 4, status: "Confirmed" },
  { time: "19:00", table: "Patio 2", guest: "L. Brunner", covers: 6, status: "Confirmed" },
  { time: "19:30", table: "Table 12", guest: "S. Meier", covers: 2, status: "No-show" },
  { time: "20:15", table: "Table 5", guest: "J. Huber", covers: 3, status: "Pending" },
];

export default function TableDemo() {
  const covers = bookings.reduce((sum, booking) => sum + booking.covers, 0);

  return (
    <div className="w-full max-w-2xl">
      <Table>
        <TableCaption>Bookings for tonight's dinner shift.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">Time</TableHead>
            <TableHead>Table</TableHead>
            <TableHead>Guest</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Covers</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={`${booking.time}-${booking.table}`}>
              <TableCell className="font-medium">{booking.time}</TableCell>
              <TableCell>{booking.table}</TableCell>
              <TableCell>{booking.guest}</TableCell>
              <TableCell className="text-muted-foreground">{booking.status}</TableCell>
              <TableCell className="text-right">{booking.covers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total covers</TableCell>
            <TableCell className="text-right">{covers}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
