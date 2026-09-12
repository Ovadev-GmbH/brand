import { Gauge } from "@ovadev-gmbh/ui-januna";

const readings = [
  { label: "Covers used", value: 72, showValue: true },
  { label: "Tables seated", value: 45, showValue: true, equal: true },
  { label: "Bar", value: 12 },
];

export default function GaugeDemo() {
  return (
    <div className="flex flex-wrap items-end gap-6">
      {readings.map((reading) => (
        <div key={reading.label} className="flex flex-col items-center gap-2">
          <Gauge
            value={reading.value}
            showValue={reading.showValue}
            arcPriority={reading.equal ? "equal" : "primary"}
            aria-label={reading.label}
          />
          <span className="text-label-13 text-content-secondary">{reading.label}</span>
        </div>
      ))}
      <div className="flex flex-col items-center gap-2">
        <Gauge
          value={88}
          size="lg"
          showValue
          colors={{ primary: "var(--jan-green-1000)", secondary: "var(--jan-green-200)" }}
          aria-label="Tonight's occupancy"
        />
        <span className="text-label-13 text-content-secondary">Tonight</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-12 items-center gap-3">
          <Gauge value={72} size="sm" showValue aria-label="Covers used" />
          <Gauge value={72} size="tiny" aria-label="Covers used" />
          <Gauge value={0} size="sm" indeterminate aria-label="Syncing bookings" />
        </div>
        <span className="text-label-13 text-content-secondary">Small, tiny, syncing</span>
      </div>
    </div>
  );
}
