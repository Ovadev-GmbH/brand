import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ovadev-gmbh/ui-ovadev";

export default function DialogFooterClose() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Request press kit</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Press kit on its way</DialogTitle>
          <DialogDescription>
            The logos, the mark and the team photos are being packed. The ZIP arrives by e-mail when it is ready, usually within a minute.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  );
}
