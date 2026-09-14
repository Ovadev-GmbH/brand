import { Alert, AlertAction, AlertDescription, Button } from "@ovadev-gmbh/ui-ovadev";
import { InfoIcon, TriangleAlertIcon } from "lucide-react";

export default function AlertSmall() {
  return (
    <div className="grid w-full max-w-md gap-2">
      <Alert size="sm" variant="warning">
        <TriangleAlertIcon />
        <AlertDescription>3 ticket e-mails were not delivered since 08:00.</AlertDescription>
        <AlertAction>
          <Button variant="outline" size="xs">
            Send again
          </Button>
        </AlertAction>
      </Alert>
      <Alert size="sm">
        <InfoIcon />
        <AlertDescription>Changes apply to new orders only.</AlertDescription>
      </Alert>
    </div>
  );
}
