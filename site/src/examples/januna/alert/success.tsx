import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";

export default function AlertSuccess() {
  return (
    <Alert variant="success" className="max-w-md">
      <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
      <AlertTitle>Payment account connected</AlertTitle>
      <AlertDescription>Deposits can be taken from tonight. Payouts reach the account every Monday.</AlertDescription>
    </Alert>
  );
}
