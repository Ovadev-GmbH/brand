import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-internal";

const invoices = [
  { id: "INV-2026-0142", tenant: "acme-logistics", amount: "1'240.00" },
  { id: "INV-2026-0141", tenant: "bergwerk-ag", amount: "390.00" },
  { id: "INV-2026-0138", tenant: "helvetia-labs", amount: "585.00" },
];

export default function ContextMenuTableRow() {
  return (
    <div className="w-full max-w-md">
      <Table>
        <TableCaption>Right-click a row for its actions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Tenant</TableHead>
            <TableHead className="text-right">CHF</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <ContextMenu key={invoice.id}>
              <ContextMenuTrigger render={<TableRow />}>
                <TableCell className="text-label-13-mono">{invoice.id}</TableCell>
                <TableCell>{invoice.tenant}</TableCell>
                <TableCell className="text-right text-label-13-mono">{invoice.amount}</TableCell>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-48">
                <ContextMenuItem>Open invoice</ContextMenuItem>
                <ContextMenuItem>Send reminder</ContextMenuItem>
                <ContextMenuItem>Download PDF</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">Void invoice</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
