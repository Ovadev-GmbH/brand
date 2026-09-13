import { Kbd, KbdGroup } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown02Icon, ArrowUp02Icon, CornerDownLeftIcon } from "@hugeicons/core-free-icons";

export default function KbdIcon() {
  return (
    <div className="flex flex-wrap items-center gap-6 text-label-13 text-content-secondary">
      <span className="flex items-center gap-2">
        <KbdGroup>
          <Kbd>
            <HugeiconsIcon icon={ArrowUp02Icon} strokeWidth={2} />
            <span className="sr-only">Up arrow</span>
          </Kbd>
          <Kbd>
            <HugeiconsIcon icon={ArrowDown02Icon} strokeWidth={2} />
            <span className="sr-only">Down arrow</span>
          </Kbd>
        </KbdGroup>
        Move between bookings
      </span>
      <span className="flex items-center gap-2">
        <Kbd>
          <HugeiconsIcon icon={CornerDownLeftIcon} strokeWidth={2} />
          <span className="sr-only">Enter</span>
        </Kbd>
        Seat the party
      </span>
    </div>
  );
}
