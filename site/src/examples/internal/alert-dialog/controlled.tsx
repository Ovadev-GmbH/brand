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
} from "@ovadev-gmbh/ui-internal";

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
        <AlertDialogTrigger render={<Button variant="outline" />}>Void invoice</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Void INV-2026-0142?</AlertDialogTitle>
            <AlertDialogDescription>
              acme-logistics no longer owes <span className="text-label-13-mono">CHF 1'240.00</span>. The invoice stays in
              the ledger, marked void.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={voiding}>Keep invoice</AlertDialogCancel>
            <AlertDialogAction variant="destructive" disabled={voiding} onClick={voidInvoice}>
              {voiding ? <Spinner data-icon="inline-start" /> : null}
              Void invoice
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <span className="text-label-13 text-content-secondary">
        <span className="text-label-13-mono">INV-2026-0142</span> {voided ? "void" : "open"}
      </span>
    </div>
  );
}
