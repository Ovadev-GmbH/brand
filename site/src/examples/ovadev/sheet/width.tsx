import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-ovadev";

const events = [
  { at: "2026-09-13 09:12", actor: "robin@ova.dev", event: "deployment.succeeded" },
  { at: "2026-09-13 08:57", actor: "philip@ova.dev", event: "api_key.revoked" },
  { at: "2026-09-12 17:30", actor: "system", event: "invoice.created" },
  { at: "2026-09-12 11:04", actor: "lena@ova.dev", event: "member.invited" },
];

export default function SheetWidth() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>View audit log</SheetTrigger>
      <SheetContent className="data-[side=right]:sm:max-w-xl">
        <SheetHeader>
          <SheetTitle>Audit log</SheetTitle>
          <SheetDescription>The last four changes on acme-logistics.</SheetDescription>
        </SheetHeader>
        <div className="px-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time (UTC)</TableHead>
                <TableHead>Actor</TableHead>
                <TableHead>Event</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((e) => (
                <TableRow key={e.at}>
                  <TableCell className="text-label-13-mono">{e.at}</TableCell>
                  <TableCell className="text-content-secondary">{e.actor}</TableCell>
                  <TableCell className="text-label-13-mono">{e.event}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </SheetContent>
    </Sheet>
  );
}
