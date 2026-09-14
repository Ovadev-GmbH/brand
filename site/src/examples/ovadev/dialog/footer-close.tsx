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
      <DialogTrigger render={<Button variant="outline" />}>Show export status</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Export started</DialogTitle>
          <DialogDescription>
            The September invoices are being exported. The CSV arrives by e-mail when it is ready, usually within a minute.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  );
}
