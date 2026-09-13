import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { InformationCircleIcon } from "@hugeicons/core-free-icons";

export default function AlertInfo() {
  return (
    <Alert variant="info" className="max-w-md">
      <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
      <AlertTitle>Christmas bookings open on 2026-10-01</AlertTitle>
      <AlertDescription>Guests can book 24 to 31 December from 09:00 that morning.</AlertDescription>
    </Alert>
  );
}
