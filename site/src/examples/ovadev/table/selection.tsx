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
} from "@ovadev-gmbh/ui-ovadev";

const requests = [
  { id: "QUO-2026-0142", from: "Gemeinde Hausen am Albis", received: "2026-09-12", amount: "12'400.00" },
  { id: "QUO-2026-0141", from: "Restaurant Rössli, Zug", received: "2026-09-11", amount: "3'900.00" },
  { id: "QUO-2026-0139", from: "Sportzentrum Herti", received: "2026-09-09", amount: "4'950.00" },
  { id: "QUO-2026-0138", from: "Badi Cham", received: "2026-09-08", amount: "5'850.00" },
];

export default function TableWithSelection() {
  const [selected, setSelected] = React.useState<Set<string>>(new Set(["QUO-2026-0139"]));
  const all = selected.size === requests.length;

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
                onCheckedChange={(on) => setSelected(on ? new Set(requests.map((r) => r.id)) : new Set())}
                aria-label="Select all quotes"
              />
            </TableHead>
            <TableHead>Quote</TableHead>
            <TableHead>From</TableHead>
            <TableHead>Received</TableHead>
            <TableHead className="text-right">CHF</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => {
            const on = selected.has(request.id);
            return (
              <TableRow key={request.id} data-state={on ? "selected" : undefined}>
                <TableCell>
                  <Checkbox checked={on} onCheckedChange={(v) => toggle(request.id, v)} aria-label={`Select ${request.id}`} />
                </TableCell>
                <TableCell className="text-label-13-mono">{request.id}</TableCell>
                <TableCell>{request.from}</TableCell>
                <TableCell className="text-label-13-mono text-content-secondary">{request.received}</TableCell>
                <TableCell className="text-right text-label-13-mono">{request.amount}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between">
        <span className="text-label-13 text-content-secondary">{selected.size} selected</span>
        <Button variant="outline" size="sm" disabled={selected.size === 0}>
          Send quotes
        </Button>
      </div>
    </div>
  );
}
