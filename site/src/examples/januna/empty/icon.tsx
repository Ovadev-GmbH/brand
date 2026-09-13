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
import { Add01Icon, UserMultipleIcon } from "@hugeicons/core-free-icons";

export default function EmptyIcon() {
  return (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <HugeiconsIcon icon={UserMultipleIcon} strokeWidth={2} />
        </EmptyMedia>
        <EmptyTitle>No one on the waitlist</EmptyTitle>
        <EmptyDescription>Dinner still has 24 free covers, so guests are booked straight in.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2} data-icon="inline-start" />
          Add walk-in
        </Button>
      </EmptyContent>
    </Empty>
  );
}
