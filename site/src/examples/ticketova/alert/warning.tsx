import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-ticketova";
import { WarningIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function AlertWarning() {
  return (
    <Alert variant="warning" className="max-w-md">
      <WarningIcon />
      <AlertTitle>API quota 86% used</AlertTitle>
      <AlertDescription>
        helvetia-labs has made 860'000 of 1'000'000 requests in September. Requests are rejected once the quota is spent.
      </AlertDescription>
    </Alert>
  );
}
