import { Description, DescriptionList } from "@ovadev-gmbh/ui-internal";

export default function DescriptionColumns() {
  return (
    <DescriptionList columns={4} className="w-full max-w-xl">
      <Description title="Invoice" content={<span className="text-label-14-mono">INV-2026-0142</span>} />
      <Description title="Tenant" content="acme-logistics" />
      <Description title="Issued" content={<span className="text-label-14-mono">2026-09-01</span>} />
      <Description title="Due" content={<span className="text-label-14-mono">2026-09-30</span>} />
      <Description title="Plan" content="Scale" />
      <Description title="Period" content="August 2026" />
      <Description title="Terms" content="30 days net" />
      <Description title="Amount" content={<span className="text-label-14-mono">CHF 1'240.00</span>} />
    </DescriptionList>
  );
}
