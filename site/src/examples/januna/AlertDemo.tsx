import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon } from "@hugeicons/core-free-icons";

export default function AlertDemo() {
  return (
    <Alert className="w-full max-w-md">
      <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
      <AlertTitle>Private event on Friday from 19:00</AlertTitle>
      <AlertDescription>
        The back room is reserved for a party of 30. Guests booking Friday dinner online see the main room only.
      </AlertDescription>
    </Alert>
  );
}
