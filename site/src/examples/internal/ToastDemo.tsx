import { Button, Toaster, toast } from "@ovadev-gmbh/ui-internal";

export default function ToastDemo() {
  return (
    <Toaster>
      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              type: "success",
              title: "Deployment finished",
              description: "dpl_8f3a is live on production.",
            })
          }
        >
          Deployment finished
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              title: "Invoice sent",
              description: "INV-2041 went to billing@acme-logistics.ch.",
            })
          }
        >
          Invoice sent
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              type: "info",
              title: "API key revoked",
              description: "ok_live_…4f9c no longer authenticates.",
              actionProps: { children: "Undo" },
            })
          }
        >
          Key revoked
        </Button>
      </div>
    </Toaster>
  );
}
