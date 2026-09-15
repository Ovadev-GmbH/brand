import { Alert, AlertAction, AlertDescription, Button } from "@ovadev-gmbh/ui-ticketova";
import { InfoIcon, WarningIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function AlertSmall() {
  return (
    <div className="grid w-full max-w-md gap-2">
      <Alert size="sm" variant="warning">
        <WarningIcon />
        <AlertDescription>3 deliveries failed since 08:00 UTC.</AlertDescription>
        <AlertAction>
          <Button variant="outline" size="xs">
            Retry deliveries
          </Button>
        </AlertAction>
      </Alert>
      <Alert size="sm">
        <InfoIcon />
        <AlertDescription>Changes apply to new deliveries only.</AlertDescription>
      </Alert>
    </div>
  );
}
