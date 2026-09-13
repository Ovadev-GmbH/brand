import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-internal";
import { CircleCheckIcon } from "lucide-react";

export default function AlertSuccess() {
  return (
    <Alert variant="success" className="max-w-md">
      <CircleCheckIcon />
      <AlertTitle>Certificate issued for billing.acme.ch</AlertTitle>
      <AlertDescription>Valid until 2026-12-12. It renews by itself 30 days before then.</AlertDescription>
    </Alert>
  );
}
