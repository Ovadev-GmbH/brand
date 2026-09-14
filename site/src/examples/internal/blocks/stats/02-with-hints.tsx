import { Stat, StatGrid } from "@ovadev-gmbh/ui-internal/blocks";

export default function StatsWithHintsExample() {
  return (
    <div className="p-space-6">
      <StatGrid>
        <Stat
          label="Invoiced, September"
          value="CHF 38'960.00"
          delta="+6.1%"
          tone="positive"
          hint="Against August, 36'720.00. 41 invoices, 3 credit notes."
        />
        <Stat
          label="Overdue"
          value="CHF 2'145.00"
          delta="+1'240.00"
          tone="negative"
          hint="4 invoices past due; the oldest since 2026-08-22."
        />
        <Stat label="Active tenants" value="127" delta="+3" tone="neutral" hint="2 in trial until 2026-09-30." />
      </StatGrid>
    </div>
  );
}
