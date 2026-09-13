import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-januna";

const bookings = [
  { time: "12:00", guest: "Rossi", covers: 2, table: "T14", shift: "lunch" },
  { time: "12:30", guest: "Brunner", covers: 4, table: "T7", shift: "lunch" },
  { time: "19:00", guest: "Keller", covers: 6, table: "T12", shift: "dinner" },
  { time: "20:00", guest: "Moreau", covers: 8, table: "Terrace 3", shift: "dinner" },
];

const shifts = [
  { value: "lunch", label: "Lunch" },
  { value: "dinner", label: "Dinner" },
];

export default function TabsWithTable() {
  return (
    <Tabs defaultValue="dinner" className="w-full max-w-xl">
      <TabsList>
        {shifts.map((shift) => (
          <TabsTrigger key={shift.value} value={shift.value}>
            {shift.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {shifts.map((shift) => (
        <TabsContent key={shift.value} value={shift.value}>
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
              {bookings
                .filter((b) => b.shift === shift.value)
                .map((b) => (
                  <TableRow key={b.time}>
                    <TableCell className="text-label-13-mono">{b.time}</TableCell>
                    <TableCell>{b.guest}</TableCell>
                    <TableCell className="text-content-secondary">{b.table}</TableCell>
                    <TableCell className="text-right text-label-13-mono">{b.covers}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TabsContent>
      ))}
    </Tabs>
  );
}
