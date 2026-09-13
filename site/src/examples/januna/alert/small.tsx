import { Alert, AlertAction, AlertDescription, Button } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon, InformationCircleIcon } from "@hugeicons/core-free-icons";

export default function AlertSmall() {
  return (
    <div className="grid w-full max-w-md gap-2">
      <Alert size="sm" variant="warning">
        <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
        <AlertDescription>2 guests on T4 have allergies.</AlertDescription>
        <AlertAction>
          <Button variant="outline" size="xs">
            Open notes
          </Button>
        </AlertAction>
      </Alert>
      <Alert size="sm">
        <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
        <AlertDescription>Changes apply to new bookings only.</AlertDescription>
      </Alert>
    </div>
  );
}
