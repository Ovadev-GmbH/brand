import { Gauge } from "@ovadev-gmbh/ui-internal";

const limits = [
  { label: "Storage", value: 74, figure: "7.4 of 10 GB" },
  { label: "Seats", value: 84, figure: "42 of 50" },
];

export default function GaugeWithLabel() {
  return (
    <div className="flex flex-wrap gap-8">
      {limits.map((limit) => (
        <div key={limit.label} className="flex items-center gap-3">
          <Gauge value={limit.value} showValue aria-label={`${limit.label} used`} />
          <div className="flex flex-col">
            <span className="text-label-13">{limit.label}</span>
            <span className="text-label-13-mono text-content-secondary">{limit.figure}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
