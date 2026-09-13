import { Description, DescriptionList } from "@ovadev-gmbh/ui-internal";

export default function DescriptionRight() {
  return (
    <DescriptionList className="w-80">
      <Description title="Tenant" content="bergwerk-ag" />
      <Description title="Open balance" content={<span className="text-label-14-mono">CHF 3'480.00</span>} right />
      <Description title="Plan" content="Team" />
      <Description title="Monthly" content={<span className="text-label-14-mono">CHF 390.00</span>} right />
    </DescriptionList>
  );
}
