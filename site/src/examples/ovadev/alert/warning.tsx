import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-ovadev";
import { TriangleAlertIcon } from "lucide-react";

export default function AlertWarning() {
  return (
    <Alert variant="warning" className="max-w-md">
      <TriangleAlertIcon />
      <AlertTitle>Pool at 86% of capacity</AlertTitle>
      <AlertDescription>
        Türlersee has admitted 860 of 1'000 visitors today. The shop stops selling day tickets once the pool is full.
      </AlertDescription>
    </Alert>
  );
}
