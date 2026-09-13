import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-internal";
import { CircleXIcon } from "lucide-react";

export default function AlertDestructive() {
  return (
    <Alert variant="destructive" className="max-w-md">
      <CircleXIcon />
      <AlertTitle>Payment failed for INV-2026-0142</AlertTitle>
      <AlertDescription>
        The card on file for bergwerk-ag was declined. CHF 1'240.00 stays open, due 2026-09-30.
      </AlertDescription>
    </Alert>
  );
}
