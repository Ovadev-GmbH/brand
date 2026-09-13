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
  FieldDescription,
  FieldLabel,
  Input,
} from "@ovadev-gmbh/ui-januna";

const section = "Terrace";

export default function AlertDialogTypeToConfirm() {
  const [open, setOpen] = React.useState(false);
  const [typed, setTyped] = React.useState("");

  function openChange(next: boolean) {
    setOpen(next);
    if (!next) setTyped("");
  }

  return (
    <AlertDialog open={open} onOpenChange={openChange}>
      <AlertDialogTrigger render={<Button variant="destructive" />}>Delete section</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete the {section} section?</AlertDialogTitle>
          <AlertDialogDescription>
            Its 8 tables leave the floor plan. The 23 upcoming bookings on them stay, without a table.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Field>
          <FieldLabel htmlFor="alert-dialog-confirm-section">Section name</FieldLabel>
          <Input
            id="alert-dialog-confirm-section"
            value={typed}
            onChange={(event) => setTyped(event.target.value)}
            autoComplete="off"
          />
          <FieldDescription>Type {section} to confirm.</FieldDescription>
        </Field>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive" disabled={typed !== section} onClick={() => openChange(false)}>
            Delete section
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
