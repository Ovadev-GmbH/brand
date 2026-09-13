import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";

export default function EmptyWithInput() {
  return (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyTitle>Booking not found</EmptyTitle>
        <EmptyDescription>
          No booking has the reference <span className="text-copy-13-mono">BK-2041</span>. It may have been cancelled
          or mistyped.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup>
          <InputGroupAddon>
            <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search by guest or reference" aria-label="Search bookings" />
        </InputGroup>
      </EmptyContent>
    </Empty>
  );
}
