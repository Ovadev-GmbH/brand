import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-ticketova";
import { CalendarDotsIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function AlertDemo() {
  return (
    <Alert className="w-full max-w-md">
      <CalendarDotsIcon />
      <AlertTitle>Maintenance on 2026-09-20</AlertTitle>
      <AlertDescription>
        <span className="text-label-13-mono">ch-zrh-1</span> is read-only from 02:00 to 02:30 UTC while the
        invoices index is rebuilt.
      </AlertDescription>
    </Alert>
  );
}
