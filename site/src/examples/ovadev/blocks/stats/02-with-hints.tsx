import { Stat, StatGrid } from "@ovadev-gmbh/ui-ovadev/blocks";

export default function StatsWithHintsExample() {
  return (
    <div className="p-space-6">
      <StatGrid>
        <Stat
          label="Visitors, September"
          value="48'310"
          delta="+6.1%"
          tone="positive"
          hint="Against August, 45'540. 61% from Switzerland, 22% from Germany."
        />
        <Stat
          label="Contact requests"
          value="27"
          delta="+9"
          tone="positive"
          hint="19 about TICKETOVA, 5 about JANUNA, 3 other. 2 still unanswered."
        />
        <Stat
          label="Uptime, 30 days"
          value="99.98%"
          delta="-0.01 pt"
          tone="negative"
          hint="One outage of 8 minutes on 2026-09-03, during the host's maintenance."
        />
      </StatGrid>
    </div>
  );
}
