import { Button } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { MoreHorizontalIcon, RefreshIcon } from "@hugeicons/core-free-icons";

export default function ButtonIcon() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" aria-label="Refresh the floor plan">
        <HugeiconsIcon icon={RefreshIcon} strokeWidth={2} />
      </Button>
      <Button variant="ghost" size="icon" aria-label="More actions for T12">
        <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
      </Button>
    </div>
  );
}
