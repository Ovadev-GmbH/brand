import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-ovadev";
import { MailWarningIcon } from "lucide-react";

export default function AlertLink() {
  return (
    <Alert className="max-w-md">
      <MailWarningIcon />
      <AlertTitle>Newsletter to lea.brunner@tuerlersee.ch bounces</AlertTitle>
      <AlertDescription>
        The last 2 issues were rejected by the mail server. <a href="#newsletter-address">Update the address</a>.
      </AlertDescription>
    </Alert>
  );
}
