import { Gauge, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-internal";

// More is worse for a quota: green while there is room, yellow from 75, red from 90.
const quota = {
  "0": "var(--int-status-success)",
  "75": "var(--int-status-warning)",
  "90": "var(--int-status-danger)",
};

const tenants = [
  { slug: "acme-logistics", plan: "Scale", requests: 780_000, limit: 1_000_000 },
  { slug: "bergwerk-ag", plan: "Team", requests: 102_500, limit: 250_000 },
  { slug: "helvetia-labs", plan: "Scale", requests: 940_000, limit: 1_000_000 },
];

const int = new Intl.NumberFormat("de-CH");

export default function GaugeInTable() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tenant</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead className="text-right">Requests</TableHead>
            <TableHead className="text-right">Used</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tenants.map((t) => {
            const used = Math.round((t.requests / t.limit) * 100);
            return (
              <TableRow key={t.slug}>
                <TableCell>{t.slug}</TableCell>
                <TableCell className="text-content-secondary">{t.plan}</TableCell>
                <TableCell className="text-right text-label-13-mono">
                  {int.format(t.requests)} / {int.format(t.limit)}
                </TableCell>
                <TableCell>
                  <span className="flex items-center justify-end gap-2">
                    <Gauge value={used} size="tiny" colors={quota} aria-label={`API quota of ${t.slug} used`} />
                    <span className="w-10 text-right text-label-13-mono">{used}%</span>
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
