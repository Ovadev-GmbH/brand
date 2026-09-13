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

export default function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Show confirmation</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Booking confirmed</DialogTitle>
          <DialogDescription>
            Nora Keller, party of 6, Saturday 19 September at 19:30 on T12. She has the confirmation by text message.
          </DialogDescription>
        </DialogHeader>
        <p className="m-0 flex items-baseline justify-between text-label-14 text-content-secondary">
          Reference <span className="text-label-14-mono text-content-primary">JN-2026-4821</span>
        </p>
        <DialogFooter>
          <DialogClose render={<Button />}>Done</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
