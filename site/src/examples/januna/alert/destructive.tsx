import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { AlertCircleIcon } from "@hugeicons/core-free-icons";

export default function AlertDestructive() {
  return (
    <Alert variant="destructive" className="max-w-md">
      <HugeiconsIcon icon={AlertCircleIcon} strokeWidth={2} />
      <AlertTitle>Deposit for Moreau declined</AlertTitle>
      <AlertDescription>
        The card for the booking at 20:00, party of 8, on Terrace 3 was declined. CHF 160.00 is still open.
      </AlertDescription>
    </Alert>
  );
}
