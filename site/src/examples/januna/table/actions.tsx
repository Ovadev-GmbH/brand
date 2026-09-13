import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { MoreHorizontalIcon } from "@hugeicons/core-free-icons";

const bookings = [
  { time: "19:00", guest: "Luca Brunner", table: "T12", party: 6 },
  { time: "19:30", guest: "Anna Keller", table: "T4", party: 2 },
  { time: "20:15", guest: "Marco Rossi", table: "Terrace 3", party: 4 },
];

export default function TableWithActions() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>Guest</TableHead>
            <TableHead>Table</TableHead>
            <TableHead className="text-right">Party</TableHead>
            <TableHead className="w-12">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.time}>
              <TableCell className="text-label-13-mono">{booking.time}</TableCell>
              <TableCell>{booking.guest}</TableCell>
              <TableCell className="text-content-secondary">{booking.table}</TableCell>
              <TableCell className="text-right text-label-13-mono">{booking.party}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button variant="ghost" size="icon-sm" aria-label={`Actions for ${booking.guest}`} />}
                  >
                    <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Seat party</DropdownMenuItem>
                    <DropdownMenuItem>Move table</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">Cancel booking</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
