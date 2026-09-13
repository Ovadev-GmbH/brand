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
} from "@ovadev-gmbh/ui-januna";

export default function AlertDialogControlled() {
  const [open, setOpen] = React.useState(false);
  const [refunding, setRefunding] = React.useState(false);
  const [refunded, setRefunded] = React.useState(false);

  function refund() {
    setRefunding(true);
    // Stands in for the request: the dialog closes when it has gone through.
    setTimeout(() => {
      setRefunding(false);
      setRefunded(true);
      setOpen(false);
    }, 900);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger render={<Button variant="outline" disabled={refunded} />}>Refund deposit</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Refund the deposit?</AlertDialogTitle>
            <AlertDialogDescription>
              <span className="text-label-14-mono">CHF 1&apos;240.00</span> goes back to the card of Keller Events GmbH.
              The booking for 24 on Saturday stays, without a deposit.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={refunding}>Keep deposit</AlertDialogCancel>
            <AlertDialogAction disabled={refunding} onClick={refund}>
              {refunding ? <Spinner data-icon="inline-start" /> : null}
              Refund deposit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <span className="text-label-14 text-content-secondary">
        Deposit <span className="text-label-14-mono">CHF 1&apos;240.00</span> {refunded ? "refunded" : "held"}
      </span>
    </div>
  );
}
