import { Badge } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";

export default function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>Confirmed</Badge>
      <Badge variant="secondary">Pending</Badge>
      <Badge variant="outline">Walk-in</Badge>
      <Badge variant="destructive">No-show</Badge>
      <Badge>
        <HugeiconsIcon icon={Tick02Icon} strokeWidth={2} data-icon="inline-start" />
        Seated
      </Badge>
      <Badge variant="outline" render={<a href="#tables" />}>
        Table 4
      </Badge>
    </div>
  );
}
