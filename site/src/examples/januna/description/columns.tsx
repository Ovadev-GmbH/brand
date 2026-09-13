import { Description, DescriptionList } from "@ovadev-gmbh/ui-januna";

export default function DescriptionColumns() {
  return (
    <DescriptionList columns={4} className="w-full max-w-xl">
      <Description title="Booking" content={<span className="text-label-13-mono">JAN-4821</span>} />
      <Description title="Guest" content="Anna Keller" />
      <Description title="Date" content="Fri 18 Sep" />
      <Description title="Time" content={<span className="text-label-13-mono">19:30</span>} />
      <Description title="Party" content="6 guests" />
      <Description title="Table" content="T12" />
      <Description title="Shift" content="Dinner" />
      <Description title="Deposit" content={<span className="text-label-13-mono">CHF 120.00</span>} />
    </DescriptionList>
  );
}
