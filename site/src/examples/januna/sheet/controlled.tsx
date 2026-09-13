import * as React from "react";
import { Button, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@ovadev-gmbh/ui-januna";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

type Booking = { time: string; guest: string; party: number; table: string; note: string };

const bookings: Booking[] = [
  { time: "18:00", guest: "Amir Haddad", party: 2, table: "T4", note: "Asked for a window seat." },
  { time: "19:30", guest: "Nora Keller", party: 4, table: "T12", note: "Nut allergy." },
  { time: "20:15", guest: "Lina Brunner", party: 6, table: "T9", note: "Birthday, cake at 21:30." },
];

export default function SheetControlled() {
  const [open, setOpen] = React.useState(false);
  const [booking, setBooking] = React.useState<Booking | null>(null);
  const show = (b: Booking) => (setBooking(b), setOpen(true));

  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>Guest</TableHead>
            <TableHead className="text-right">Party</TableHead>
            <TableHead className="w-10"><span className="sr-only">Details</span></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((b) => (
            <TableRow key={b.time}>
              <TableCell className="text-label-13-mono">{b.time}</TableCell>
              <TableCell>{b.guest}</TableCell>
              <TableCell className="text-right text-label-13-mono">{b.party}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon-sm" aria-label={`Show booking for ${b.guest}`} onClick={() => show(b)}>
                  <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{booking?.guest}</SheetTitle>
            <SheetDescription>
              Party of {booking?.party} at {booking?.time}, table {booking?.table}. {booking?.note}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
