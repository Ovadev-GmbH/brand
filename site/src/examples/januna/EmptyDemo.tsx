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
import { Add01Icon, Calendar03Icon } from "@hugeicons/core-free-icons";

export default function EmptyDemo() {
  return (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
        </EmptyMedia>
        <EmptyTitle>No bookings tonight yet</EmptyTitle>
        <EmptyDescription>
          Share your booking link with guests, or add the first booking by hand.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2} data-icon="inline-start" />
          Add booking
        </Button>
      </EmptyContent>
    </Empty>
  );
}
