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
} from "@ovadev-gmbh/ui-ovadev";

const slug = "tuerlersee-season";

export default function AlertDialogTypeToConfirm() {
  const [open, setOpen] = React.useState(false);
  const [typed, setTyped] = React.useState("");

  function openChange(next: boolean) {
    setOpen(next);
    if (!next) setTyped("");
  }

  return (
    <AlertDialog open={open} onOpenChange={openChange}>
      <AlertDialogTrigger render={<Button variant="destructive" />}>Delete post</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete {slug}?</AlertDialogTitle>
          <AlertDialogDescription>
            The post, its 3 images and both translations are removed. Links to it return 404.
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
            Delete post
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
