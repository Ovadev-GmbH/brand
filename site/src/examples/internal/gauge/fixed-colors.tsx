import { Gauge } from "@ovadev-gmbh/ui-internal";

export default function GaugeFixedColors() {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="flex items-center gap-3">
        <Gauge value={84} showValue colors={{ primary: "var(--int-brand)" }} aria-label="Seats in use" />
        <div className="flex flex-col">
          <span className="text-label-13">Seats in use</span>
          <span className="text-label-13-mono text-content-secondary">42 of 50</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Gauge
          value={97}
          showValue
          colors={{ primary: "var(--int-status-danger)", secondary: "var(--int-surface-danger)" }}
          aria-label="Disk on worker-3 used"
        />
        <div className="flex flex-col">
          <span className="text-label-13">Disk on worker-3</span>
          <span className="text-label-13 text-status-danger">Full in about 2 h</span>
        </div>
      </div>
    </div>
  );
}
