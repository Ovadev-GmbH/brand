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
  Input,
  Label,
} from "@ovadev-gmbh/ui-internal";

export default function DialogDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>
          Rename tenant
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename tenant</DialogTitle>
            <DialogDescription>
              The slug <span className="text-label-13-mono">acme-logistics</span>{" "}
              stays the same. Only the display name changes.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-1.5">
            <Label htmlFor="dialog-tenant-name">Display name</Label>
            <Input id="dialog-tenant-name" defaultValue="Acme Logistics AG" />
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
            <Button>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
