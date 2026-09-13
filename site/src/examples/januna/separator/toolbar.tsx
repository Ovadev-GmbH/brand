import { HugeiconsIcon } from "@hugeicons/react";
import { FilterIcon, MailSend01Icon, PrinterIcon, RefreshIcon } from "@hugeicons/core-free-icons";
import { Button, Separator } from "@ovadev-gmbh/ui-januna";

export default function SeparatorToolbar() {
  return (
    <div role="toolbar" aria-label="Tonight's bookings" className="flex h-8 items-center gap-2">
      <Button variant="ghost" size="sm">
        <HugeiconsIcon icon={FilterIcon} strokeWidth={2} data-icon="inline-start" />
        Filter
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Refresh bookings">
        <HugeiconsIcon icon={RefreshIcon} strokeWidth={2} />
      </Button>
      <Separator orientation="vertical" />
      <Button variant="ghost" size="sm">
        <HugeiconsIcon icon={PrinterIcon} strokeWidth={2} data-icon="inline-start" />
        Print list
      </Button>
      <Button variant="ghost" size="sm">
        <HugeiconsIcon icon={MailSend01Icon} strokeWidth={2} data-icon="inline-start" />
        Message guests
      </Button>
    </div>
  );
}
