import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-januna";

const tables = [
  { name: "T4", area: "Main room", free: "18:00", seats: 2 },
  { name: "T12", area: "Main room", free: "21:15", seats: 6 },
  { name: "Terrace 3", area: "Terrace", free: "19:45", seats: 4 },
];

export default function TableWithCaption() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableCaption>Tables open for walk-ins, Saturday 13 September 2026.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Table</TableHead>
            <TableHead>Area</TableHead>
            <TableHead>Free from</TableHead>
            <TableHead className="text-right">Seats</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tables.map((table) => (
            <TableRow key={table.name}>
              <TableCell>{table.name}</TableCell>
              <TableCell className="text-content-secondary">{table.area}</TableCell>
              <TableCell className="text-label-13-mono text-content-secondary">{table.free}</TableCell>
              <TableCell className="text-right text-label-13-mono">{table.seats}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
