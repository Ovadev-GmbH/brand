import { useState } from "react";
import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-januna";

const bookings = [
  { time: "19:00", guest: "Brunner", covers: 4, noShow: false },
  { time: "19:30", guest: "Keller", covers: 6, noShow: false },
];

export default function EmptyInTable() {
  const [noShowsOnly, setNoShowsOnly] = useState(true);
  const rows = noShowsOnly ? bookings.filter((b) => b.noShow) : bookings;

  return (
    <div className="flex w-full max-w-xl flex-col gap-2">
      <span className="text-label-13 text-content-secondary">Dinner, {noShowsOnly ? "no-shows" : "all bookings"}</span>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>Guest</TableHead>
            <TableHead className="text-right">Covers</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((b) => (
            <TableRow key={b.time}>
              <TableCell className="text-label-13-mono">{b.time}</TableCell>
              <TableCell>{b.guest}</TableCell>
              <TableCell className="text-right text-label-13-mono">{b.covers}</TableCell>
            </TableRow>
          ))}
          {rows.length === 0 ? (
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={3} className="whitespace-normal">
                <Empty>
                  <EmptyHeader>
                    <EmptyTitle>No no-shows tonight</EmptyTitle>
                    <EmptyDescription>Every dinner guest so far has arrived.</EmptyDescription>
                  </EmptyHeader>
                  <EmptyContent>
                    <Button variant="outline" size="sm" onClick={() => setNoShowsOnly(false)}>
                      Clear filter
                    </Button>
                  </EmptyContent>
                </Empty>
              </TableCell>
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </div>
  );
}
