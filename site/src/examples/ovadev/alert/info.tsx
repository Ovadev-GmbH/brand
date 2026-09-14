import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-ovadev";
import { InfoIcon } from "lucide-react";

export default function AlertInfo() {
  return (
    <Alert variant="info" className="max-w-md">
      <InfoIcon />
      <AlertTitle>JANUNA opens to new restaurants from 2026-10-01</AlertTitle>
      <AlertDescription>Restaurants on the waiting list get their invitation first.</AlertDescription>
    </Alert>
  );
}
