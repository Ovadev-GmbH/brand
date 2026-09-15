import * as React from "react";
import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-ticketova";

const invoices = [
  { id: "INV-2026-0142", due: "2026-09-30", amount: "1'240.00", overdue: false },
  { id: "INV-2026-0131", due: "2026-08-31", amount: "1'240.00", overdue: false },
];

export default function EmptyInTable() {
  const [overdueOnly, setOverdueOnly] = React.useState(true);
  const rows = overdueOnly ? invoices.filter((i) => i.overdue) : invoices;

  return (
    <div className="flex w-full max-w-xl flex-col gap-2">
      <span className="text-label-13 text-content-secondary">
        acme-logistics, {overdueOnly ? "overdue invoices" : "all invoices"}
      </span>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Due</TableHead>
            <TableHead className="text-right">CHF</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="text-label-13-mono">{invoice.id}</TableCell>
              <TableCell className="text-label-13-mono text-content-secondary">{invoice.due}</TableCell>
              <TableCell className="text-right text-label-13-mono">{invoice.amount}</TableCell>
            </TableRow>
          ))}
          {rows.length === 0 ? (
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={3} className="whitespace-normal">
                <Empty>
                  <EmptyHeader>
                    <EmptyTitle>No overdue invoices</EmptyTitle>
                    <EmptyDescription>No invoice of acme-logistics is past its due date.</EmptyDescription>
                  </EmptyHeader>
                  <EmptyContent>
                    <Button variant="outline" size="sm" onClick={() => setOverdueOnly(false)}>
                      Clear filter
                    </Button>
                  </EmptyContent>
                </Empty>
              </TableCell>
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </div>
  );
}
