import { Switch, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-januna";

const tables = [
  { code: "T4", area: "Inside, 2 seats", online: true, walkIns: true },
  { code: "T12", area: "Inside, 6 seats", online: true, walkIns: false },
  { code: "Terrace 3", area: "Terrace, 4 seats", online: false, walkIns: true },
];

export default function SwitchInTable() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Table</TableHead>
            <TableHead className="w-28">Online</TableHead>
            <TableHead className="w-28">Walk-ins</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tables.map((table) => (
            <TableRow key={table.code}>
              <TableCell>
                {table.code} <span className="text-label-13 text-content-secondary">{table.area}</span>
              </TableCell>
              <TableCell>
                <Switch size="sm" defaultChecked={table.online} aria-label={`${table.code} bookable online`} />
              </TableCell>
              <TableCell>
                <Switch size="sm" defaultChecked={table.walkIns} aria-label={`${table.code} open to walk-ins`} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
