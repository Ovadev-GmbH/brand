import { Description, DescriptionList, TooltipProvider } from "@ovadev-gmbh/ui-januna";

export default function DescriptionTooltip() {
  return (
    <TooltipProvider>
      <DescriptionList className="w-80">
        <Description
          title="Covers"
          content={<span className="text-label-13-mono">118 / 140</span>}
          tooltip="Guests booked for dinner against the seats set on tonight's floor plan."
        />
        <Description
          title="No-show rate"
          content={<span className="text-label-13-mono">4.2%</span>}
          tooltip="Bookings not seated 20 minutes after their time, over the last 30 days."
        />
      </DescriptionList>
    </TooltipProvider>
  );
}
