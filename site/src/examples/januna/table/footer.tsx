import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-januna";

const nights = [
  { night: "Thursday 10 September", covers: 134, revenue: 8240.5 },
  { night: "Friday 11 September", covers: 196, revenue: 12980 },
  { night: "Saturday 12 September", covers: 214, revenue: 14375.2 },
];

/* Two decimals and the Swiss thousands separator: 12'980.00. */
const chf = (value: number) => value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "'");

export default function TableWithFooter() {
  const covers = nights.reduce((sum, n) => sum + n.covers, 0);
  const revenue = nights.reduce((sum, n) => sum + n.revenue, 0);

  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Night</TableHead>
            <TableHead className="text-right">Covers</TableHead>
            <TableHead className="text-right">Revenue, CHF</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {nights.map((n) => (
            <TableRow key={n.night}>
              <TableCell>{n.night}</TableCell>
              <TableCell className="text-right text-label-13-mono">{n.covers}</TableCell>
              <TableCell className="text-right text-label-13-mono">{chf(n.revenue)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Thursday to Saturday</TableCell>
            <TableCell className="text-right text-label-13-mono">{covers}</TableCell>
            <TableCell className="text-right text-label-13-mono">{chf(revenue)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
