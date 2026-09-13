import { Button } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon } from "@hugeicons/core-free-icons";

export default function ButtonSize() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="xs">
          Extra small
        </Button>
        <Button variant="outline" size="icon-xs" aria-label="Add guest">
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="Add guest">
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline">Default</Button>
        <Button variant="outline" size="icon" aria-label="Add guest">
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button variant="outline" size="icon-lg" aria-label="Add guest">
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
        </Button>
      </div>
    </div>
  );
}
