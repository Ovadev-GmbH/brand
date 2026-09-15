import * as React from "react";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Field,
  FieldLabel,
  Input,
  Spinner,
} from "@ovadev-gmbh/ui-ticketova";

export default function DialogControlled() {
  const [open, setOpen] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [name, setName] = React.useState("Acme Logistics AG");

  function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    // Stands in for the request: the dialog closes when it has gone through.
    setTimeout(() => {
      setSaving(false);
      setOpen(false);
    }, 900);
  }

  return (
    <div className="flex items-center gap-3">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger render={<Button variant="outline" />}>Rename tenant</DialogTrigger>
        <DialogContent>
          <form onSubmit={save} className="grid gap-4">
            <DialogHeader>
              <DialogTitle>Rename tenant</DialogTitle>
              <DialogDescription>The dialog stays open until the change is saved.</DialogDescription>
            </DialogHeader>
            <Field>
              <FieldLabel htmlFor="dialog-controlled-name">Display name</FieldLabel>
              <Input id="dialog-controlled-name" value={name} onChange={(e) => setName(e.target.value)} />
            </Field>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
              <Button type="submit" disabled={saving}>
                {saving ? <Spinner data-icon="inline-start" /> : null}
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <span className="text-label-13 text-content-secondary">{name}</span>
    </div>
  );
}
