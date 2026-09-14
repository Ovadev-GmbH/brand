import { Progress, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-ovadev";

const seasons = [
  { pool: "Türlersee", sold: 40_000, capacity: 40_000 },
  { pool: "Seebad Zug", sold: 12_480, capacity: 31_200 },
  { pool: "Badi Baar", sold: 0, capacity: 8_750 },
];

const int = new Intl.NumberFormat("de-CH");

export default function ProgressInTable() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pool</TableHead>
            <TableHead className="w-40">Season</TableHead>
            <TableHead className="text-right">Tickets</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {seasons.map((s) => (
            <TableRow key={s.pool}>
              <TableCell>{s.pool}</TableCell>
              <TableCell>
                <Progress value={s.sold} max={s.capacity} aria-label={`Tickets sold at ${s.pool}`} />
              </TableCell>
              <TableCell className="text-right text-label-13-mono">
                {int.format(s.sold)} / {int.format(s.capacity)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
