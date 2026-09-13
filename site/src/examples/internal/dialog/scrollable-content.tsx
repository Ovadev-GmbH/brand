import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ovadev-gmbh/ui-internal";

const releases = [
  { version: "2.14.0", date: "2026-09-10", notes: "Invoices export as CSV from the billing table." },
  { version: "2.13.2", date: "2026-09-04", notes: "Reminders no longer go out twice when an invoice is edited after sending." },
  { version: "2.13.1", date: "2026-08-29", notes: "The tenant search matches on VAT numbers." },
  { version: "2.13.0", date: "2026-08-22", notes: "API keys can be rotated without downtime; the old key stays valid for an hour." },
  { version: "2.12.3", date: "2026-08-15", notes: "Deployments show the commit that triggered them." },
  { version: "2.12.2", date: "2026-08-08", notes: "Amounts in CHF round to five centimes on invoices, as required." },
  { version: "2.12.1", date: "2026-08-01", notes: "The audit log records who changed a plan." },
  { version: "2.12.0", date: "2026-07-25", notes: "Tenants can be suspended and resumed from their page." },
  { version: "2.11.4", date: "2026-07-18", notes: "Webhooks retry for 24 hours before giving up." },
  { version: "2.11.3", date: "2026-07-11", notes: "Region ch-zrh-1 is available for new tenants." },
];

export default function DialogScrollableContent() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>What&rsquo;s new</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Release notes</DialogTitle>
          <DialogDescription>The last ten releases of the admin console.</DialogDescription>
        </DialogHeader>
        <div className="-mx-6 max-h-[50vh] overflow-y-auto px-6">
          {releases.map((r) => (
            <div key={r.version} className="flex flex-col gap-1 border-b border-divider py-3 last:border-b-0">
              <span className="text-label-12-mono text-content-tertiary">
                {r.version} · {r.date}
              </span>
              <p className="m-0 text-copy-14">{r.notes}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
