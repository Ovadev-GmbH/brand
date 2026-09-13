import { Button } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon } from "@hugeicons/core-free-icons";

export default function ButtonDemo() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline">Seat the party</Button>
      <Button variant="outline" size="icon" aria-label="Call the guest">
        <HugeiconsIcon icon={Call02Icon} strokeWidth={2} />
      </Button>
    </div>
  );
}
