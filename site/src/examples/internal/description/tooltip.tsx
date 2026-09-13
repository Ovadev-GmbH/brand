import { Description, DescriptionList, TooltipProvider } from "@ovadev-gmbh/ui-internal";

export default function DescriptionTooltip() {
  return (
    <TooltipProvider>
      <DescriptionList className="w-80">
        <Description
          title="Seats"
          content={<span className="text-label-14-mono">42 / 50</span>}
          tooltip="Active members only; invited members are billed once they join."
        />
        <Description
          title="Included requests"
          content={<span className="text-label-14-mono">2'000'000</span>}
          tooltip="Per calendar month, reset on the 1st at 00:00 UTC."
        />
      </DescriptionList>
    </TooltipProvider>
  );
}
