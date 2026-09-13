import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-januna";

const bookings = [
  { time: "18:30", guest: "Nina Weber", table: "T4", party: 2, deposit: null },
  { time: "19:00", guest: "Luca Brunner", table: "T9", party: 4, deposit: "80.00" },
  { time: "19:30", guest: "Anna Keller", table: "T12", party: 6, deposit: "120.00" },
  { time: "20:00", guest: "Marco Rossi", table: "Terrace 3", party: 3, deposit: null },
  { time: "20:15", guest: "Meier AG", table: "Private dining", party: 12, deposit: "1'240.00" },
];

export default function TableDemo() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>Guest</TableHead>
            <TableHead>Table</TableHead>
            <TableHead className="text-right">Party</TableHead>
            <TableHead className="text-right">Deposit, CHF</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.time}>
              <TableCell className="text-label-13-mono">{booking.time}</TableCell>
              <TableCell>{booking.guest}</TableCell>
              <TableCell className="text-content-secondary">{booking.table}</TableCell>
              <TableCell className="text-right text-label-13-mono">{booking.party}</TableCell>
              <TableCell className="text-right text-label-13-mono">
                {booking.deposit ?? <span className="text-content-tertiary">None</span>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
