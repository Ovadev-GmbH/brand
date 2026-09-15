import { Badge, Spinner } from "@ovadev-gmbh/ui-ticketova";

export default function SpinnerBadge() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-label-13">bergwerk-ag</span>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" />
        Provisioning
      </Badge>
    </div>
  );
}
