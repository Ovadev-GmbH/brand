import { Button, Separator } from "@ovadev-gmbh/ui-internal";
import { DownloadIcon, ListFilterIcon, RefreshCwIcon, SendIcon } from "lucide-react";

export default function SeparatorToolbar() {
  return (
    <div role="toolbar" aria-label="Invoices" className="flex h-7 items-center gap-2">
      <Button variant="ghost" size="sm">
        <ListFilterIcon data-icon="inline-start" />
        Filter
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Refresh invoices">
        <RefreshCwIcon />
      </Button>
      <Separator orientation="vertical" />
      <Button variant="ghost" size="sm">
        <DownloadIcon data-icon="inline-start" />
        Export CSV
      </Button>
      <Button variant="ghost" size="sm">
        <SendIcon data-icon="inline-start" />
        Send reminders
      </Button>
    </div>
  );
}
