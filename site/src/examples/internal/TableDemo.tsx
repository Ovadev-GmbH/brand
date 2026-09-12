import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-internal";

const invoices = [
  { id: "INV-2026-0142", tenant: "acme-gmbh", plan: "Scale", issued: "2026-09-01", amount: 1240.0 },
  { id: "INV-2026-0141", tenant: "nordlicht", plan: "Team", issued: "2026-09-01", amount: 390.0 },
  { id: "INV-2026-0140", tenant: "bergwerk-ag", plan: "Scale", issued: "2026-08-31", amount: 1240.0 },
  { id: "INV-2026-0139", tenant: "kaffeehaus", plan: "Starter", issued: "2026-08-31", amount: 49.0 },
  { id: "INV-2026-0138", tenant: "helvetia-labs", plan: "Team", issued: "2026-08-30", amount: 585.0 },
];

const chf = new Intl.NumberFormat("de-CH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function TableDemo() {
  const total = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Tenant</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Issued</TableHead>
            <TableHead className="text-right">CHF</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="text-label-13-mono">{invoice.id}</TableCell>
              <TableCell>{invoice.tenant}</TableCell>
              <TableCell className="text-content-secondary">{invoice.plan}</TableCell>
              <TableCell className="text-label-13-mono text-content-secondary">{invoice.issued}</TableCell>
              <TableCell className="text-right text-label-13-mono">{chf.format(invoice.amount)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total, 5 invoices</TableCell>
            <TableCell className="text-right text-label-13-mono">{chf.format(total)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
