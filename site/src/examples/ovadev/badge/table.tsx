import { Badge, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-ovadev";

const tenants = [
  { slug: "acme-logistics", plan: "Scale", seats: 42, trial: false },
  { slug: "bergwerk-ag", plan: "Team", seats: 18, trial: false },
  { slug: "helvetia-labs", plan: "Scale", seats: 97, trial: true },
];

export default function BadgeInTable() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tenant</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead className="text-right">Seats</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tenants.map((t) => (
            <TableRow key={t.slug}>
              <TableCell>
                <span className="flex items-center gap-2">
                  {t.slug}
                  {t.trial ? <Badge variant="secondary">Trial</Badge> : null}
                </span>
              </TableCell>
              <TableCell className="text-content-secondary">{t.plan}</TableCell>
              <TableCell className="text-right text-label-13-mono">{t.seats}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
