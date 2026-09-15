import { Stat, StatGrid } from "@ovadev-gmbh/ui-ticketova/blocks";

export default function StatsOverviewExample() {
  return (
    <div className="p-space-6">
      <StatGrid>
        <Stat label="Requests, last 24 h" value="1'284'302" delta="+4.2%" tone="positive" />
        <Stat label="Error rate" value="0.31%" delta="-0.04 pt" tone="positive" />
        <Stat label="p95 latency" value="184 ms" delta="+12 ms" tone="negative" />
        <Stat label="Open incidents" value="2" delta="0" tone="neutral" />
      </StatGrid>
    </div>
  );
}
