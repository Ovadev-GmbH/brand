import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-ovadev";

const usage = [
  { month: "June 2026", requests: 1_204_880, amount: 412.5 },
  { month: "July 2026", requests: 1_388_214, amount: 468.35 },
  { month: "August 2026", requests: 1_512_907, amount: 509.8 },
];

const chf = new Intl.NumberFormat("de-CH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const int = new Intl.NumberFormat("de-CH");

export default function TableWithFooter() {
  const requests = usage.reduce((sum, u) => sum + u.requests, 0);
  const amount = usage.reduce((sum, u) => sum + u.amount, 0);

  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Month</TableHead>
            <TableHead className="text-right">API requests</TableHead>
            <TableHead className="text-right">CHF</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usage.map((u) => (
            <TableRow key={u.month}>
              <TableCell>{u.month}</TableCell>
              <TableCell className="text-right text-label-13-mono">{int.format(u.requests)}</TableCell>
              <TableCell className="text-right text-label-13-mono">{chf.format(u.amount)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Quarter to date</TableCell>
            <TableCell className="text-right text-label-13-mono">{int.format(requests)}</TableCell>
            <TableCell className="text-right text-label-13-mono">{chf.format(amount)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
