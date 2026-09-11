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
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon } from "@hugeicons/core-free-icons";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
        New booking
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New booking</DialogTitle>
          <DialogDescription>
            Reserve a table for tonight&apos;s dinner shift. The guest receives
            a confirmation by email as soon as you save.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="dialog-guest">Guest</Label>
            <Input id="dialog-guest" defaultValue="Nora Keller" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="dialog-party">Party size</Label>
              <Input id="dialog-party" type="number" defaultValue="4" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dialog-time">Time</Label>
              <Input id="dialog-time" type="time" defaultValue="19:30" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <Button>Confirm booking</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
