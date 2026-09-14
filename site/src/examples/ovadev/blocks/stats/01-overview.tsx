import { Stat, StatGrid } from "@ovadev-gmbh/ui-ovadev/blocks";

export default function StatsOverviewExample() {
  return (
    <div className="p-space-6">
      <StatGrid>
        <Stat label="Visitors, last 24 h" value="4'812" delta="+6.3%" tone="positive" />
        <Stat label="Blog reads" value="1'207" delta="+12.1%" tone="positive" />
        <Stat label="Contact requests" value="3" delta="+1" tone="neutral" />
        <Stat label="Uptime, 30 days" value="99.98%" delta="-0.01 pt" tone="negative" />
      </StatGrid>
    </div>
  );
}
