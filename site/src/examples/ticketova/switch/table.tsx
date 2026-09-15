import { Switch, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-ticketova";

const flags = [
  { key: "invoice-pdf-v2", staging: true, production: false },
  { key: "usage-alerts", staging: true, production: true },
  { key: "sepa-direct-debit", staging: false, production: false },
];

export default function SwitchInTable() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Flag</TableHead>
            <TableHead className="w-28">Staging</TableHead>
            <TableHead className="w-28">Production</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {flags.map((flag) => (
            <TableRow key={flag.key}>
              <TableCell className="text-label-13-mono">{flag.key}</TableCell>
              <TableCell>
                <Switch size="sm" defaultChecked={flag.staging} aria-label={`${flag.key} on staging`} />
              </TableCell>
              <TableCell>
                <Switch size="sm" defaultChecked={flag.production} aria-label={`${flag.key} on production`} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
