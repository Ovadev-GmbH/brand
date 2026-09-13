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
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { LockIcon } from "@hugeicons/core-free-icons";

export default function DialogNoCloseButton() {
  return (
    <Dialog disablePointerDismissal>
      <DialogTrigger render={<Button variant="outline" />}>
        <HugeiconsIcon icon={LockIcon} strokeWidth={2} data-icon="inline-start" />
        Lock the lectern
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>The lectern is locked</DialogTitle>
          <DialogDescription>
            Guest names and phone numbers stay hidden while the host is away from the tablet.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button />}>Unlock</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
