import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-ovadev";

const season = [
  { month: "June 2026", tickets: 18_412, amount: 128_884 },
  { month: "July 2026", tickets: 31_907, amount: 223_349 },
  { month: "August 2026", tickets: 27_255, amount: 190_785 },
];

const chf = new Intl.NumberFormat("de-CH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const int = new Intl.NumberFormat("de-CH");

export default function TableWithFooter() {
  const tickets = season.reduce((sum, m) => sum + m.tickets, 0);
  const amount = season.reduce((sum, m) => sum + m.amount, 0);

  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Month</TableHead>
            <TableHead className="text-right">Tickets sold</TableHead>
            <TableHead className="text-right">CHF</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {season.map((m) => (
            <TableRow key={m.month}>
              <TableCell>{m.month}</TableCell>
              <TableCell className="text-right text-label-13-mono">{int.format(m.tickets)}</TableCell>
              <TableCell className="text-right text-label-13-mono">{chf.format(m.amount)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Season to date</TableCell>
            <TableCell className="text-right text-label-13-mono">{int.format(tickets)}</TableCell>
            <TableCell className="text-right text-label-13-mono">{chf.format(amount)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
