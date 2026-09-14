import { Progress, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-ovadev";

const exports = [
  { tenant: "acme-logistics", done: 40_000, total: 40_000 },
  { tenant: "bergwerk-ag", done: 12_480, total: 31_200 },
  { tenant: "helvetia-labs", done: 0, total: 8_750 },
];

const int = new Intl.NumberFormat("de-CH");

export default function ProgressInTable() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tenant</TableHead>
            <TableHead className="w-40">Export</TableHead>
            <TableHead className="text-right">Rows</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exports.map((e) => (
            <TableRow key={e.tenant}>
              <TableCell>{e.tenant}</TableCell>
              <TableCell>
                <Progress value={e.done} max={e.total} aria-label={`Export of ${e.tenant}`} />
              </TableCell>
              <TableCell className="text-right text-label-13-mono">
                {int.format(e.done)} / {int.format(e.total)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
