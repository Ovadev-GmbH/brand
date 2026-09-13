import { Gauge } from "@ovadev-gmbh/ui-internal";

// For a quota more is worse: green while there is room, yellow from 75, red from 90.
const quota = {
  "0": "var(--int-status-success)",
  "75": "var(--int-status-warning)",
  "90": "var(--int-status-danger)",
};

const tenants = [
  { slug: "bergwerk-ag", used: 41 },
  { slug: "acme-logistics", used: 78 },
  { slug: "helvetia-labs", used: 94 },
];

function word(used: number) {
  if (used >= 90) return "Nearly spent";
  if (used >= 75) return "Running low";
  return "Within quota";
}

export default function GaugeThresholds() {
  return (
    <ul className="flex w-80 flex-col gap-3">
      {tenants.map((t) => (
        <li key={t.slug} className="flex items-center gap-3">
          <Gauge value={t.used} size="sm" colors={quota} aria-label={`API quota of ${t.slug} used`} />
          <div className="flex flex-1 flex-col">
            <span className="text-label-13">{t.slug}</span>
            <span className="text-label-12 text-content-secondary">{word(t.used)}</span>
          </div>
          <span className="text-label-13-mono">{t.used}%</span>
        </li>
      ))}
    </ul>
  );
}
