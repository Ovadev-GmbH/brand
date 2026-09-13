import { Button } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Delete02Icon } from "@hugeicons/core-free-icons";

export default function ButtonDestructive() {
  return (
    <Button variant="destructive">
      <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} data-icon="inline-start" />
      Delete guest profile
    </Button>
  );
}
