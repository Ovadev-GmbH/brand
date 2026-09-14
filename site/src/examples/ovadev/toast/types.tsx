import { Button, Toaster, toast } from "@ovadev-gmbh/ui-ovadev";

const messages = [
  { type: "success", title: "Message sent", description: "Your request went to hello@ova.dev." },
  { type: "info", title: "Maintenance scheduled", description: "ova.dev is read-only on 2026-09-15, 02:00 to 03:00 CEST." },
  { type: "warning", title: "Draft not saved", description: "Pool season 2026 has changes from 16:44 that are not saved." },
  { type: "error", title: "Sending failed", description: "The mail service did not answer. Nothing went out." },
  { type: "loading", title: "Publishing Pool season 2026", description: "Building the German and English pages." },
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
