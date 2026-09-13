import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { AlertCircleIcon, RefreshIcon } from "@hugeicons/core-free-icons";

export default function EmptyError() {
  return (
    <Empty className="w-full max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="bg-surface-danger text-status-danger">
          <HugeiconsIcon icon={AlertCircleIcon} strokeWidth={2} />
        </EmptyMedia>
        <EmptyTitle>Bookings did not load</EmptyTitle>
        <EmptyDescription>The connection dropped while fetching tonight's dinner shift.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">
          <HugeiconsIcon icon={RefreshIcon} strokeWidth={2} data-icon="inline-start" />
          Reload bookings
        </Button>
      </EmptyContent>
    </Empty>
  );
}
