import * as React from "react";
import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-januna";

const bookings = [
  { id: "JAN-4821", guest: "Anna Keller", date: "Fri 18 Sep", deposit: "120.00" },
  { id: "JAN-4817", guest: "Luca Brunner", date: "Sat 19 Sep", deposit: "240.00" },
  { id: "JAN-4809", guest: "Meier AG", date: "Sat 19 Sep", deposit: "1'240.00" },
  { id: "JAN-4802", guest: "Nina Weber", date: "Sun 20 Sep", deposit: "80.00" },
];

export default function TableWithSelection() {
  const [selected, setSelected] = React.useState<Set<string>>(new Set(["JAN-4809"]));
  const all = selected.size === bookings.length;

  const toggle = (id: string, on: boolean) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (on) next.add(id);
      else next.delete(id);
      return next;
    });

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8">
              <Checkbox
                checked={all}
                indeterminate={selected.size > 0 && !all}
                onCheckedChange={(on) => setSelected(on ? new Set(bookings.map((b) => b.id)) : new Set())}
                aria-label="Select all bookings"
              />
            </TableHead>
            <TableHead>Booking</TableHead>
            <TableHead>Guest</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Deposit, CHF</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => {
            const on = selected.has(booking.id);
            return (
              <TableRow key={booking.id} data-state={on ? "selected" : undefined}>
                <TableCell>
                  <Checkbox checked={on} onCheckedChange={(v) => toggle(booking.id, v)} aria-label={`Select ${booking.id}`} />
                </TableCell>
                <TableCell className="text-label-13-mono">{booking.id}</TableCell>
                <TableCell>{booking.guest}</TableCell>
                <TableCell className="text-content-secondary">{booking.date}</TableCell>
                <TableCell className="text-right text-label-13-mono">{booking.deposit}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between">
        <span className="text-label-13 text-content-secondary">{selected.size} selected, deposit not yet paid</span>
        <Button variant="outline" size="sm" disabled={selected.size === 0}>
          Send deposit reminders
        </Button>
      </div>
    </div>
  );
}
