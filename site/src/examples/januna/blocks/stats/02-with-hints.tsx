import { Stat, StatGrid } from "@ovadev-gmbh/ui-januna/blocks";

export default function WithHintsExample() {
  return (
    <div className="p-space-6">
      <StatGrid>
        <Stat label="Occupancy" value="86%" delta="+4.2%" tone="positive" hint="Versus last Friday, 82%" />
        <Stat label="Average spend per cover" value="CHF 68.40" delta="-3.1%" tone="negative" hint="Versus the last four weeks" />
        <Stat label="Deposits held" value="CHF 1'240.00" delta="9 bookings" tone="neutral" hint="Released after the evening closes" />
      </StatGrid>
    </div>
  );
}
