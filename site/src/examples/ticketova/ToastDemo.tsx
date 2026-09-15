import { Button, Toaster, toast } from "@ovadev-gmbh/ui-ticketova";

export default function ToastDemo() {
  return (
    <Toaster>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            title: "Invoice sent",
            description: "INV-2026-0142 for CHF 1'240.00 went to billing@acme-logistics.ch.",
          })
        }
      >
        Send invoice
      </Button>
    </Toaster>
  );
}
