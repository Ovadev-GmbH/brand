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
  { at: "2026-09-13 09:12", actor: "robin@ova.dev", event: "post.published" },
  { at: "2026-09-13 08:57", actor: "philip@ova.dev", event: "request.answered" },
  { at: "2026-09-12 17:30", actor: "system", event: "newsletter.sent" },
  { at: "2026-09-12 11:04", actor: "beni@ova.dev", event: "job.posted" },
];

export default function SheetWidth() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>View page history</SheetTrigger>
      <SheetContent className="data-[side=right]:sm:max-w-xl">
        <SheetHeader>
          <SheetTitle>Page history</SheetTitle>
          <SheetDescription>The last four changes on ova.dev.</SheetDescription>
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
