import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-januna";

const bookings = [
  { time: "18:00", guest: "Amir Haddad", party: 2, table: "T4" },
  { time: "19:30", guest: "Nora Keller", party: 4, table: "T12" },
  { time: "20:15", guest: "Lina Brunner", party: 6, table: "T9" },
  { time: "21:00", guest: "Jonas Meier", party: 3, table: "Terrace 3" },
];

export default function SheetWidth() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>View dinner shift</SheetTrigger>
      <SheetContent className="data-[side=right]:sm:max-w-xl">
        <SheetHeader>
          <SheetTitle>Dinner shift</SheetTitle>
          <SheetDescription>18:00 to 23:00. Four bookings, 15 covers.</SheetDescription>
        </SheetHeader>
        <div className="px-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Guest</TableHead>
                <TableHead className="text-right">Party</TableHead>
                <TableHead>Table</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((b) => (
                <TableRow key={b.time}>
                  <TableCell className="text-label-13-mono">{b.time}</TableCell>
                  <TableCell>{b.guest}</TableCell>
                  <TableCell className="text-right text-label-13-mono">{b.party}</TableCell>
                  <TableCell className="text-content-secondary">{b.table}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </SheetContent>
    </Sheet>
  );
}
