import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon } from "@hugeicons/core-free-icons";

export default function AlertWarning() {
  return (
    <Alert variant="warning" className="max-w-md">
      <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
      <AlertTitle>Dinner is 94% booked</AlertTitle>
      <AlertDescription>
        <span className="text-label-13-mono">103</span> of <span className="text-label-13-mono">110</span> covers are
        taken. Requests after 19:00 join the waitlist.
      </AlertDescription>
    </Alert>
  );
}
