import { Alert, AlertDescription, AlertTitle } from "@ovadev-gmbh/ui-ovadev";
import { CircleXIcon } from "lucide-react";

export default function AlertDestructive() {
  return (
    <Alert variant="destructive" className="max-w-md">
      <CircleXIcon />
      <AlertTitle>Message not sent</AlertTitle>
      <AlertDescription>
        The contact form could not reach hello@ova.dev. Write to us directly or try again in a few minutes.
      </AlertDescription>
    </Alert>
  );
}
