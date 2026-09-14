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
} from "@ovadev-gmbh/ui-ovadev";

export default function DialogNoCloseButton() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Simulate expired session</DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Your session has expired</DialogTitle>
          <DialogDescription>Sign in again to keep working. Unsaved changes on this page are kept.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button />}>Sign in again</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
