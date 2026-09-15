import * as React from "react";
import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-ticketova";

const invoices = [
  { id: "INV-2026-0142", tenant: "acme-logistics", due: "2026-09-30", amount: "1'240.00" },
  { id: "INV-2026-0141", tenant: "nordlicht", due: "2026-09-30", amount: "390.00" },
  { id: "INV-2026-0139", tenant: "kaffeehaus", due: "2026-09-15", amount: "49.00" },
  { id: "INV-2026-0138", tenant: "helvetia-labs", due: "2026-09-14", amount: "585.00" },
];

export default function TableWithSelection() {
  const [selected, setSelected] = React.useState<Set<string>>(new Set(["INV-2026-0139"]));
  const all = selected.size === invoices.length;

  const toggle = (id: string, on: boolean) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (on) next.add(id);
      else next.delete(id);
      return next;
    });

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8">
              <Checkbox
                checked={all}
                indeterminate={selected.size > 0 && !all}
                onCheckedChange={(on) => setSelected(on ? new Set(invoices.map((i) => i.id)) : new Set())}
                aria-label="Select all invoices"
              />
            </TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead>Tenant</TableHead>
            <TableHead>Due</TableHead>
            <TableHead className="text-right">CHF</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => {
            const on = selected.has(invoice.id);
            return (
              <TableRow key={invoice.id} data-state={on ? "selected" : undefined}>
                <TableCell>
                  <Checkbox checked={on} onCheckedChange={(v) => toggle(invoice.id, v)} aria-label={`Select ${invoice.id}`} />
                </TableCell>
                <TableCell className="text-label-13-mono">{invoice.id}</TableCell>
                <TableCell>{invoice.tenant}</TableCell>
                <TableCell className="text-label-13-mono text-content-secondary">{invoice.due}</TableCell>
                <TableCell className="text-right text-label-13-mono">{invoice.amount}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between">
        <span className="text-label-13 text-content-secondary">{selected.size} selected</span>
        <Button variant="outline" size="sm" disabled={selected.size === 0}>
          Send reminders
        </Button>
      </div>
    </div>
  );
}
