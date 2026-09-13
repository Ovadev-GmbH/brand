import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ovadev-gmbh/ui-januna";

export default function DialogFooterClose() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Deposit status</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deposit refunded</DialogTitle>
          <DialogDescription>
            CHF 300.00 goes back to Nora Keller&rsquo;s card within 5 working days. Her booking for Saturday is
            cancelled.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  );
}
