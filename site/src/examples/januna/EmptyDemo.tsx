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
    <Empty className="max-w-xl border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
        </EmptyMedia>
        <EmptyTitle>No bookings yet</EmptyTitle>
        <EmptyDescription>
          Tonight's dinner shift is empty. Add a booking by hand or share your
          reservation link with guests.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex flex-wrap justify-center gap-2">
          <Button>
            <HugeiconsIcon icon={Add01Icon} strokeWidth={2} data-icon="inline-start" />
            Add booking
          </Button>
          <Button variant="outline">Copy link</Button>
        </div>
      </EmptyContent>
    </Empty>
  );
}
