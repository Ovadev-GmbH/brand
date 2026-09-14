import * as React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Spinner,
} from "@ovadev-gmbh/ui-ovadev";

export default function AlertDialogControlled() {
  const [open, setOpen] = React.useState(false);
  const [voiding, setVoiding] = React.useState(false);
  const [voided, setVoided] = React.useState(false);

  function voidInvoice() {
    setVoiding(true);
    // Stands in for the request: the dialog closes when it has gone through.
    setTimeout(() => {
      setVoiding(false);
      setVoided(true);
      setOpen(false);
    }, 900);
  }

  return (
    <div className="flex items-center gap-3">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger render={<Button variant="outline" />}>Cancel issue</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cancel the September issue?</AlertDialogTitle>
            <AlertDialogDescription>
              <span className="text-label-13-mono">1'204</span> subscribers do not get it. The issue stays in the
              archive, marked cancelled.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={voiding}>Keep issue</AlertDialogCancel>
            <AlertDialogAction variant="destructive" disabled={voiding} onClick={voidInvoice}>
              {voiding ? <Spinner data-icon="inline-start" /> : null}
              Cancel issue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <span className="text-label-13 text-content-secondary">
        <span className="text-label-13-mono">2026-09</span> {voided ? "cancelled" : "scheduled"}
      </span>
    </div>
  );
}
