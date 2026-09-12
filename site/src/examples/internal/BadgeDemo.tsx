import { Badge } from "@ovadev-gmbh/ui-internal";
import { CircleCheckIcon } from "lucide-react";

export default function BadgeDemo() {
  return (
    <div className="flex w-full max-w-xl flex-wrap items-center gap-3">
      <Badge>Active</Badge>
      <Badge variant="secondary">Trial</Badge>
      <Badge variant="outline">eu-central-1</Badge>
      <Badge variant="destructive">Overdue</Badge>
      <Badge variant="ghost">Draft</Badge>
      <Badge variant="link">View invoice</Badge>
      <Badge variant="outline">
        <CircleCheckIcon data-icon="inline-start" />
        Paid
      </Badge>
      <Badge variant="secondary" className="font-mono tabular-nums">
        v2.14.0
      </Badge>
    </div>
  );
}
