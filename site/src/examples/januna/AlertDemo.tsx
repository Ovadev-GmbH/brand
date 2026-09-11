import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
  Button,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";

export default function AlertDemo() {
  return (
    <div className="grid w-full max-w-xl gap-4">
      <Alert>
        <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
        <AlertTitle>Booking confirmed</AlertTitle>
        <AlertDescription>
          Table 4 is reserved for 2 guests at 19:30. The guest has been emailed.
        </AlertDescription>
        <AlertAction>
          <Button size="xs" variant="outline">
            View
          </Button>
        </AlertAction>
      </Alert>
      <Alert variant="destructive">
        <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
        <AlertTitle>Table 7 is double-booked</AlertTitle>
        <AlertDescription>
          Two bookings overlap at 20:15. Move one of them before service starts.
        </AlertDescription>
      </Alert>
    </div>
  );
}
