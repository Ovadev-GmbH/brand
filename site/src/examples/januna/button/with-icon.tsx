import { Button } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function ButtonWithIcon() {
  return (
    <div className="flex items-center gap-2">
      <Button>
        <HugeiconsIcon icon={Add01Icon} strokeWidth={2} data-icon="inline-start" />
        New booking
      </Button>
      <Button variant="outline">
        Next table
        <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
      </Button>
    </div>
  );
}
