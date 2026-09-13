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
} from "@ovadev-gmbh/ui-januna";

export default function DialogControlled() {
  const [open, setOpen] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [party, setParty] = React.useState("6");

  function save(event: React.FormEvent) {
    event.preventDefault();
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
        <DialogTrigger render={<Button variant="outline" />}>Change party size</DialogTrigger>
        <DialogContent>
          <form onSubmit={save} className="grid gap-6">
            <DialogHeader>
              <DialogTitle>Change party size</DialogTitle>
              <DialogDescription>Nora Keller, tonight at 19:30 on T12. T12 seats up to 8.</DialogDescription>
            </DialogHeader>
            <Field>
              <FieldLabel htmlFor="dialog-controlled-party">Guests</FieldLabel>
              <Input
                id="dialog-controlled-party"
                type="number"
                min={1}
                max={8}
                value={party}
                onChange={(event) => setParty(event.target.value)}
              />
            </Field>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
              <Button type="submit" disabled={saving}>
                {saving ? <Spinner data-icon="inline-start" /> : null}
                Save party size
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <span className="text-label-14 text-content-secondary">Party of {party}</span>
    </div>
  );
}
