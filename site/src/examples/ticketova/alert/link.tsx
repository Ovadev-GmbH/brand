import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-ticketova";
import { EnvelopeSimpleIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function AlertLink() {
  return (
    <Alert className="max-w-md">
      <EnvelopeSimpleIcon />
      <AlertTitle>Invoices to bergwerk-ag bounce</AlertTitle>
      <AlertDescription>
        billing@bergwerk.ch has rejected the last 2 invoices. <a href="#billing-contact">Update the billing contact</a>.
      </AlertDescription>
    </Alert>
  );
}
