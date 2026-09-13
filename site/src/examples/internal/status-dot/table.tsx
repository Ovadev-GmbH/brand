import { StatusDot, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-internal";

const deployments = [
  { id: "4f8c2a9", service: "api-gateway", region: "ch-zrh-1", state: "active", started: "14:02 UTC" },
  { id: "b31e07d", service: "billing-worker", region: "ch-zrh-1", state: "ready", started: "09:14 UTC" },
  { id: "9d02c5f", service: "tenant-sync", region: "eu-central-1", state: "error", started: "08:47 UTC" },
  { id: "77e0a14", service: "api-gateway", region: "eu-central-1", state: "canceled", started: "08:31 UTC" },
] as const;

export default function StatusDotInTable() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Deployment</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Region</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Started</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deployments.map((d) => (
            <TableRow key={d.id}>
              <TableCell className="text-label-13-mono">{d.id}</TableCell>
              <TableCell>{d.service}</TableCell>
              <TableCell className="text-label-13-mono text-content-secondary">{d.region}</TableCell>
              <TableCell>
                <StatusDot state={d.state} label titlePrefix={`Deployment ${d.id}`} />
              </TableCell>
              <TableCell className="text-right text-label-13-mono text-content-secondary">{d.started}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
