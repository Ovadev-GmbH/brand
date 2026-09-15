import { Alert, AlertAction, AlertDescription, AlertTitle, Button } from "@ovadev-gmbh/ui-ticketova";
import { WarningIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function AlertWithAction() {
  return (
    <Alert variant="warning" className="max-w-md">
      <WarningIcon />
      <AlertTitle>API key expires in 3 days</AlertTitle>
      <AlertDescription>sk_live_4f9a for acme-logistics stops working on 2026-09-16.</AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          Rotate key
        </Button>
      </AlertAction>
    </Alert>
  );
}
