import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-internal";

const tenants = [
  { slug: "acme-logistics", region: "ch-zrh-1", seats: 42, since: "2024-03-11" },
  { slug: "bergwerk-ag", region: "ch-zrh-1", seats: 18, since: "2025-01-06" },
  { slug: "helvetia-labs", region: "eu-central-1", seats: 97, since: "2023-11-20" },
];

export default function TableWithCaption() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableCaption>Tenants on the Scale plan, as of 13 September 2026.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Tenant</TableHead>
            <TableHead>Region</TableHead>
            <TableHead>Customer since</TableHead>
            <TableHead className="text-right">Seats</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tenants.map((t) => (
            <TableRow key={t.slug}>
              <TableCell>{t.slug}</TableCell>
              <TableCell className="text-label-13-mono text-content-secondary">{t.region}</TableCell>
              <TableCell className="text-label-13-mono text-content-secondary">{t.since}</TableCell>
              <TableCell className="text-right text-label-13-mono">{t.seats}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
