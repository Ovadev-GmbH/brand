import { Description, DescriptionList } from "@ovadev-gmbh/ui-januna";

export default function DescriptionRight() {
  return (
    <DescriptionList className="w-80">
      <Description title="Guest" content="Luca Brunner" />
      <Description title="Deposit held" content={<span className="text-label-13-mono">CHF 240.00</span>} right />
      <Description title="Visits this year" content="12" />
      <Description title="Spent this year" content={<span className="text-label-13-mono">CHF 3'480.00</span>} right />
    </DescriptionList>
  );
}
