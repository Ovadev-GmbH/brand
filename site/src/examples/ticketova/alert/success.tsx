import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-ticketova";
import { CheckCircleIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function AlertSuccess() {
  return (
    <Alert variant="success" className="max-w-md">
      <CheckCircleIcon />
      <AlertTitle>Certificate issued for billing.acme.ch</AlertTitle>
      <AlertDescription>Valid until 2026-12-12. It renews by itself 30 days before then.</AlertDescription>
    </Alert>
  );
}
