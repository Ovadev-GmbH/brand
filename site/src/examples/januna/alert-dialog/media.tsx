import * as React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserRemove01Icon } from "@hugeicons/core-free-icons";

export default function AlertDialogWithMedia() {
  const [open, setOpen] = React.useState(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger render={<Button variant="outline" />}>Mark as no-show</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <HugeiconsIcon icon={UserRemove01Icon} strokeWidth={1.5} />
          </AlertDialogMedia>
          <AlertDialogTitle>Mark Nora Keller as a no-show?</AlertDialogTitle>
          <AlertDialogDescription>
            Party of 6 at 19:30 on T12. The deposit of CHF 300.00 is kept and the table goes to the waitlist.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep booking</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={() => setOpen(false)}>
            Mark no-show
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
