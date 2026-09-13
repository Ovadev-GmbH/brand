import { Badge } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { AlertCircleIcon, ArrowUpRight01Icon, Tick02Icon } from "@hugeicons/core-free-icons";

export default function BadgeWithIcon() {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="secondary">
        <HugeiconsIcon icon={Tick02Icon} strokeWidth={2} data-icon="inline-start" />
        Deposit paid
      </Badge>
      <Badge variant="destructive">
        <HugeiconsIcon icon={AlertCircleIcon} strokeWidth={2} data-icon="inline-start" />
        Declined
      </Badge>
      <Badge variant="outline" render={<a href="#badge-with-icon-floor" />}>
        Floor plan
        <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} data-icon="inline-end" />
      </Badge>
    </div>
  );
}
