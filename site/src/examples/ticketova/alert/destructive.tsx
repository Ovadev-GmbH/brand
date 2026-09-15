import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-ticketova";
import { XCircleIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function AlertDestructive() {
  return (
    <Alert variant="destructive" className="max-w-md">
      <XCircleIcon />
      <AlertTitle>Payment failed for INV-2026-0142</AlertTitle>
      <AlertDescription>
        The card on file for bergwerk-ag was declined. CHF 1'240.00 stays open, due 2026-09-30.
      </AlertDescription>
    </Alert>
  );
}
