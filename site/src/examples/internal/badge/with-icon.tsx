import { Badge } from "@ovadev-gmbh/ui-internal";
import { ArrowUpRightIcon, CircleAlertIcon, CircleCheckIcon } from "lucide-react";

export default function BadgeWithIcon() {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="secondary">
        <CircleCheckIcon data-icon="inline-start" />
        Paid
      </Badge>
      <Badge variant="destructive">
        <CircleAlertIcon data-icon="inline-start" />
        Overdue
      </Badge>
      <Badge variant="outline" render={<a href="#changelog" />}>
        Changelog
        <ArrowUpRightIcon data-icon="inline-end" />
      </Badge>
    </div>
  );
}
