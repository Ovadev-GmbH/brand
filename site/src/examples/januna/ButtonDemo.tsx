import { Button } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, ArrowRight01Icon, Delete02Icon } from "@hugeicons/core-free-icons";

export default function ButtonDemo() {
  return (
    <div className="grid w-full max-w-xl gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <Button>Book a table</Button>
        <Button variant="secondary">Add to waitlist</Button>
        <Button variant="outline">Print run sheet</Button>
        <Button variant="ghost">Clear filters</Button>
        <Button variant="link">View guest profile</Button>
        <Button variant="destructive">
          <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} data-icon="inline-start" />
          Cancel booking
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Seat now</Button>
        <Button size="lg">Confirm booking</Button>
        <Button variant="outline">
          Next shift
          <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
        </Button>
        <Button size="icon" variant="outline" aria-label="Add guest">
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
        </Button>
        <Button disabled>Fully booked</Button>
      </div>
    </div>
  );
}
