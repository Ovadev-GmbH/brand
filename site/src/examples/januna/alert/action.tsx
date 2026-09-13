import { Alert, AlertAction, AlertDescription, AlertTitle, Button } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon } from "@hugeicons/core-free-icons";

export default function AlertWithAction() {
  return (
    <Alert variant="warning" className="max-w-md">
      <HugeiconsIcon icon={Clock01Icon} strokeWidth={2} />
      <AlertTitle>Keller is 15 minutes late</AlertTitle>
      <AlertDescription>Party of 6, booked for 19:30 on T12. The table is held until 19:45.</AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          Release table
        </Button>
      </AlertAction>
    </Alert>
  );
}
