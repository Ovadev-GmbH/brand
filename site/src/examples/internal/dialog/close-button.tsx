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
} from "@ovadev-gmbh/ui-internal";

export default function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Share invoice</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share invoice</DialogTitle>
          <DialogDescription>Anyone with the link can view and download INV-2026-0142 for 30 days.</DialogDescription>
        </DialogHeader>
        <Input
          className="text-label-13-mono"
          defaultValue="https://billing.ova.dev/i/9fK2qL"
          aria-label="Invoice link"
          readOnly
        />
        <DialogFooter>
          <DialogClose render={<Button />}>Done</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
