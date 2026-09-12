import {
  Description,
  DescriptionList,
  StatusDot,
  TooltipProvider,
} from "@ovadev-gmbh/ui-januna";

export default function DescriptionDemo() {
  return (
    <TooltipProvider>
      <DescriptionList columns={3} className="w-full max-w-lg">
        <Description title="Guest" content="Anna Keller" />
        <Description title="Table" content="12 — Terrace" />
        <Description
          title="Party"
          content="6 guests"
          tooltip="Includes the two children listed on the booking"
        />
        <Description title="Arrival" content="Fri 19:00" />
        <Description
          title="Status"
          content={<StatusDot state="ready" label />}
        />
        <Description
          title="Deposit"
          content="CHF 120.00"
          tooltip="Charged 48 hours before arrival, refundable until then"
          right
        />
        <Description
          title="Note from guest"
          content="Window seat if possible, one nut allergy, celebrating a birthday"
          ellipsis
          className="col-span-2 sm:col-span-3"
        />
      </DescriptionList>
    </TooltipProvider>
  );
}
