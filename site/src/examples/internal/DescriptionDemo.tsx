import {
  Description,
  DescriptionList,
  StatusDot,
  TooltipProvider,
} from "@ovadev-gmbh/ui-internal";

export default function DescriptionDemo() {
  return (
    <TooltipProvider>
      <DescriptionList columns={3} className="w-full max-w-xl">
        <Description title="Tenant" content="acme-gmbh" />
        <Description title="Plan" content="Team — annual" />
        <Description
          title="Seats"
          content={<span className="text-label-14-mono">42 / 50</span>}
          tooltip="Counts active members; invited users are not billed until they join"
        />
        <Description title="Region" content="eu-central-1" />
        <Description
          title="Status"
          content={<StatusDot state="ready" label />}
        />
        <Description
          title="Open balance"
          content={<span className="text-label-14-mono">CHF 1,240.00</span>}
          tooltip="Invoice INV-2026-0912 is due in 14 days"
          right
        />
        <Description
          title="Last deployment"
          content="b31e07d — billing-worker, promoted to production by r.markant at 09:14"
          ellipsis
          className="col-span-2 sm:col-span-3"
        />
      </DescriptionList>
    </TooltipProvider>
  );
}
