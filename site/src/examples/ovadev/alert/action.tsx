import { Alert, AlertAction, AlertDescription, AlertTitle, Button } from "@ovadev-gmbh/ui-ovadev";
import { TriangleAlertIcon } from "lucide-react";

export default function AlertWithAction() {
  return (
    <Alert variant="warning" className="max-w-md">
      <TriangleAlertIcon />
      <AlertTitle>Pool season ends in 3 days</AlertTitle>
      <AlertDescription>The Türlersee shop closes on 2026-09-16. Season passes stop selling then.</AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          Extend season
        </Button>
      </AlertAction>
    </Alert>
  );
}
