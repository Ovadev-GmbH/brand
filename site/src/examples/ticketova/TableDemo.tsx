import { Badge, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-ticketova";

const invoices = [
  { id: "INV-2026-0142", tenant: "acme-logistics", due: "2026-10-01", status: "Open", amount: "1'240.00" },
  { id: "INV-2026-0141", tenant: "nordlicht", due: "2026-09-30", status: "Open", amount: "390.00" },
  { id: "INV-2026-0139", tenant: "kaffeehaus", due: "2026-09-10", status: "Overdue", amount: "49.00" },
  { id: "INV-2026-0138", tenant: "helvetia-labs", due: "2026-09-15", status: "Paid", amount: "585.00" },
  { id: "INV-2026-0137", tenant: "bergwerk-ag", due: "2026-09-01", status: "Paid", amount: "3'480.00" },
] as const;

const badgeVariant = { Open: "outline", Overdue: "destructive", Paid: "secondary" } as const;

export default function TableDemo() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Tenant</TableHead>
            <TableHead>Due</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">CHF</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="text-label-13-mono">{invoice.id}</TableCell>
              <TableCell>{invoice.tenant}</TableCell>
              <TableCell className="text-label-13-mono text-content-secondary">{invoice.due}</TableCell>
              <TableCell>
                <Badge variant={badgeVariant[invoice.status]}>{invoice.status}</Badge>
              </TableCell>
              <TableCell className="text-right text-label-13-mono">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
