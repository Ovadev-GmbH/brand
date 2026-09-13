import { Button, Toaster, toast } from "@ovadev-gmbh/ui-internal";

const messages = [
  { type: "success", title: "Invoice sent", description: "INV-2026-0142 went to billing@acme-logistics.ch." },
  { type: "info", title: "Maintenance scheduled", description: "ch-zrh-1 is patched on 2026-09-15, 02:00 to 03:00 CEST." },
  { type: "warning", title: "Key expires soon", description: "sk_live_b21c… stops working on 2026-09-20." },
  { type: "error", title: "Export failed", description: "The accounting service did not answer. Nothing was sent." },
  { type: "loading", title: "Deploying dpl_4f2c91", description: "Building on ch-zrh-1." },
];

export default function ToastTypes() {
  return (
    <Toaster>
      <div className="flex flex-wrap items-center gap-2">
        {messages.map(({ type, title, description }) => (
          <Button key={type} variant="outline" className="capitalize" onClick={() => toast.add({ type, title, description })}>
            {type}
          </Button>
        ))}
      </div>
    </Toaster>
  );
}
