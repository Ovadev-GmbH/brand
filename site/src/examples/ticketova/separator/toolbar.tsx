import { Button, Separator } from "@ovadev-gmbh/ui-ticketova";
import { DownloadSimpleIcon, FunnelSimpleIcon, ArrowsClockwiseIcon, PaperPlaneTiltIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function SeparatorToolbar() {
  return (
    <div role="toolbar" aria-label="Invoices" className="flex h-7 items-center gap-2">
      <Button variant="ghost" size="sm">
        <FunnelSimpleIcon data-icon="inline-start" />
        Filter
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Refresh invoices">
        <ArrowsClockwiseIcon />
      </Button>
      <Separator orientation="vertical" />
      <Button variant="ghost" size="sm">
        <DownloadSimpleIcon data-icon="inline-start" />
        Export CSV
      </Button>
      <Button variant="ghost" size="sm">
        <PaperPlaneTiltIcon data-icon="inline-start" />
        Send reminders
      </Button>
    </div>
  );
}
