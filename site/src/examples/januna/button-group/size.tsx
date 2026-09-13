import { Button, ButtonGroup } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { MoreHorizontalIcon } from "@hugeicons/core-free-icons";

export default function ButtonGroupSize() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ButtonGroup aria-label="Table T12">
        <Button variant="outline" size="xs">
          Seat
        </Button>
        <Button variant="outline" size="xs">
          Release
        </Button>
        <Button variant="outline" size="icon-xs" aria-label="More actions for T12">
          <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Table T12">
        <Button variant="outline" size="sm">
          Seat
        </Button>
        <Button variant="outline" size="sm">
          Release
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="More actions for T12">
          <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Table T12">
        <Button variant="outline">Seat</Button>
        <Button variant="outline">Release</Button>
        <Button variant="outline" size="icon" aria-label="More actions for T12">
          <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
        </Button>
      </ButtonGroup>
    </div>
  );
}
