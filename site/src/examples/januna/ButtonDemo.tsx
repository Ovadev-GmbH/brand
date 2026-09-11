import { Button } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, ArrowRight01Icon, Delete02Icon } from "@hugeicons/core-free-icons";

export default function ButtonDemo() {
  return (
    <div className="grid w-full max-w-xl gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <Button>Book a table</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">
          <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} data-icon="inline-start" />
          Cancel booking
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button variant="outline">
          Next shift
          <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
        </Button>
        <Button size="icon" variant="outline" aria-label="Add guest">
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
        </Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  );
}
