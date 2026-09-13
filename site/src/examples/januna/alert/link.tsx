import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon } from "@hugeicons/core-free-icons";

export default function AlertLink() {
  return (
    <Alert className="max-w-md">
      <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
      <AlertTitle>Confirmations to 3 guests bounced</AlertTitle>
      <AlertDescription>
        Their email addresses were rejected tonight. <a href="#alert-link-guests">Check the guest details</a>.
      </AlertDescription>
    </Alert>
  );
}
