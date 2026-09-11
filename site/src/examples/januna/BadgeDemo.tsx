import { Badge } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon, Tick02Icon } from "@hugeicons/core-free-icons";

export default function BadgeDemo() {
  return (
    <div className="flex max-w-2xl flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <Badge>Confirmed</Badge>
        <Badge variant="secondary">Pending</Badge>
        <Badge variant="destructive">No-show</Badge>
        <Badge variant="outline">Walk-in</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link">Link</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Badge>
          <HugeiconsIcon icon={Tick02Icon} strokeWidth={2} data-icon="inline-start" />
          Seated
        </Badge>
        <Badge variant="secondary">
          <HugeiconsIcon icon={Clock01Icon} strokeWidth={2} data-icon="inline-start" />
          Waiting
        </Badge>
        <Badge variant="outline">6 guests</Badge>
        <Badge variant="outline" render={<a href="#tables" />}>
          Table 4
        </Badge>
      </div>
    </div>
  );
}
