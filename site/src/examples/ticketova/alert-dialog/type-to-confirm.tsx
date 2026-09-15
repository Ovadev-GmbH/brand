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
  Field,
  FieldLabel,
  Input,
} from "@ovadev-gmbh/ui-ticketova";

const slug = "bergwerk-ag";

export default function AlertDialogTypeToConfirm() {
  const [open, setOpen] = React.useState(false);
  const [typed, setTyped] = React.useState("");

  function openChange(next: boolean) {
    setOpen(next);
    if (!next) setTyped("");
  }

  return (
    <AlertDialog open={open} onOpenChange={openChange}>
      <AlertDialogTrigger render={<Button variant="destructive" />}>Delete tenant</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete {slug}?</AlertDialogTitle>
          <AlertDialogDescription>
            12 members lose access, 4 API keys are revoked and every deployment is removed. Invoices stay in the ledger.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Field>
          <FieldLabel htmlFor="alert-dialog-confirm-slug">
            Type <span className="text-label-13-mono">{slug}</span> to confirm
          </FieldLabel>
          <Input
            id="alert-dialog-confirm-slug"
            className="text-label-13-mono"
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            autoComplete="off"
          />
        </Field>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive" disabled={typed !== slug} onClick={() => openChange(false)}>
            Delete tenant
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
