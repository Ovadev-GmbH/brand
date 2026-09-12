import { Button } from "@ovadev-gmbh/ui-internal";
import { ArrowRightIcon, PlusIcon, TrashIcon } from "@phosphor-icons/react";

export default function ButtonDemo() {
  return (
    <div className="grid w-full max-w-xl gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <Button>Deploy</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">
          <TrashIcon data-icon="inline-start" />
          Revoke key
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="xs">Extra small</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button variant="outline">
          Next invoice
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
        <Button size="icon" variant="outline" aria-label="New tenant">
          <PlusIcon />
        </Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  );
}
