import { Stat, StatGrid } from "@ovadev-gmbh/ui-januna/blocks";

export default function OverviewExample() {
  return (
    <div className="p-space-6">
      <StatGrid>
        <Stat label="Bookings tonight" value="42" delta="+6" tone="positive" />
        <Stat label="Covers" value="118" delta="+14" tone="positive" />
        <Stat label="No-shows this week" value="3" delta="-2" tone="positive" />
        <Stat label="Waitlist" value="5" />
      </StatGrid>
    </div>
  );
}
