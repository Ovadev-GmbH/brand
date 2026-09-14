import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-ovadev";
import { CalendarClockIcon } from "lucide-react";

export default function AlertDemo() {
  return (
    <Alert className="w-full max-w-md">
      <CalendarClockIcon />
      <AlertTitle>Maintenance on 2026-09-20</AlertTitle>
      <AlertDescription>
        The <span className="text-label-13-mono">TICKETOVA</span> shop is read-only from 02:00 to 02:30 while the
        reporting index is rebuilt.
      </AlertDescription>
    </Alert>
  );
}
