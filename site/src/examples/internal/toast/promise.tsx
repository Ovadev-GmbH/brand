import { Button, Toaster, toast } from "@ovadev-gmbh/ui-internal";

// Stands in for the request: resolves with the number of invoices exported.
const exportInvoices = () => new Promise<number>((resolve) => setTimeout(() => resolve(142), 1800));

export default function ToastPromise() {
  return (
    <Toaster>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(exportInvoices(), {
            loading: "Exporting September invoices…",
            success: (count) => ({ title: "Export ready", description: `${count} invoices, sent to robin@ova.dev.` }),
            error: "Export failed. Nothing was sent.",
          })
        }
      >
        Export invoices
      </Button>
    </Toaster>
  );
}
