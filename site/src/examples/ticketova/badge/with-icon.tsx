import { Badge } from "@ovadev-gmbh/ui-ticketova";
import { ArrowUpRightIcon, WarningCircleIcon, CheckCircleIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function BadgeWithIcon() {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="secondary">
        <CheckCircleIcon data-icon="inline-start" />
        Paid
      </Badge>
      <Badge variant="destructive">
        <WarningCircleIcon data-icon="inline-start" />
        Overdue
      </Badge>
      <Badge variant="outline" render={<a href="#changelog" />}>
        Changelog
        <ArrowUpRightIcon data-icon="inline-end" />
      </Badge>
    </div>
  );
}
