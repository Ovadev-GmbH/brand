import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
  Button,
} from "@ovadev-gmbh/ui-internal";
import { InfoIcon, WarningIcon } from "@phosphor-icons/react";

export default function AlertDemo() {
  return (
    <div className="grid w-full max-w-xl gap-3">
      <Alert>
        <InfoIcon />
        <AlertTitle>Maintenance window scheduled</AlertTitle>
        <AlertDescription>
          eu-central-1 will be read-only on 14 Sep from 02:00 to 02:30 UTC
          while the invoices index is rebuilt.
        </AlertDescription>
      </Alert>
      <Alert>
        <AlertTitle>API key expires in 3 days</AlertTitle>
        <AlertDescription>
          Key ak_live_…9f2c for acme-gmbh rotates on 15 Sep.
        </AlertDescription>
        <AlertAction>
          <Button size="xs" variant="outline">
            Rotate
          </Button>
        </AlertAction>
      </Alert>
      <Alert variant="destructive">
        <WarningIcon />
        <AlertTitle>Deploy #4819 rolled back</AlertTitle>
        <AlertDescription>
          Health check failed on 2 of 3 instances. Traffic stays on #4818.
        </AlertDescription>
      </Alert>
    </div>
  );
}
