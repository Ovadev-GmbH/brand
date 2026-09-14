import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-ovadev";

const customers = [
  { name: "Strandbad Türlersee", canton: "ZH", gates: 2, since: "2024-05-01" },
  { name: "Hallenbad Baar", canton: "ZG", gates: 3, since: "2025-01-06" },
  { name: "Seebad Enge", canton: "ZH", gates: 4, since: "2023-06-12" },
];

export default function TableWithCaption() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableCaption>Pools on TICKETOVA with admission control, as of 13 September 2026.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Pool</TableHead>
            <TableHead>Canton</TableHead>
            <TableHead>Customer since</TableHead>
            <TableHead className="text-right">Gates</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((c) => (
            <TableRow key={c.name}>
              <TableCell>{c.name}</TableCell>
              <TableCell className="text-label-13-mono text-content-secondary">{c.canton}</TableCell>
              <TableCell className="text-label-13-mono text-content-secondary">{c.since}</TableCell>
              <TableCell className="text-right text-label-13-mono">{c.gates}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
