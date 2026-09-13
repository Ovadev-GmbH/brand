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
} from "@ovadev-gmbh/ui-januna";

const bookings = [
  { time: "18:00", guest: "Amir Haddad", party: 2 },
  { time: "19:30", guest: "Nora Keller", party: 4 },
  { time: "20:15", guest: "Lina Brunner", party: 6 },
];

export default function ContextMenuTableRow() {
  return (
    <div className="w-full max-w-md">
      <Table>
        <TableCaption>Right-click a booking for its actions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>Guest</TableHead>
            <TableHead className="text-right">Party</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((b) => (
            <ContextMenu key={b.time}>
              <ContextMenuTrigger render={<TableRow />}>
                <TableCell className="text-label-13-mono">{b.time}</TableCell>
                <TableCell>{b.guest}</TableCell>
                <TableCell className="text-right text-label-13-mono">{b.party}</TableCell>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-48">
                <ContextMenuItem>Seat guests</ContextMenuItem>
                <ContextMenuItem>Send reminder</ContextMenuItem>
                <ContextMenuItem>Move to table</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">Cancel booking</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
