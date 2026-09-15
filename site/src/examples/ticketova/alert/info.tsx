import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-ticketova";
import { InfoIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function AlertInfo() {
  return (
    <Alert variant="info" className="max-w-md">
      <InfoIcon />
      <AlertTitle>New tenants default to ch-zrh-1 from 2026-10-01</AlertTitle>
      <AlertDescription>Tenants created before then stay in the region they are in.</AlertDescription>
    </Alert>
  );
}
