import { Gauge } from "@ovadev-gmbh/ui-januna";

export default function GaugeFixedColors() {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="flex items-center gap-3">
        <Gauge value={64} showValue colors={{ primary: "var(--jan-brand)" }} aria-label="Tables seated" />
        <div className="flex flex-col">
          <span className="text-label-14">Tables seated</span>
          <span className="text-label-13-mono text-content-secondary">9 of 14</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Gauge
          value={98}
          showValue
          colors={{ primary: "var(--jan-status-danger)", secondary: "var(--jan-surface-danger)" }}
          aria-label="Turn time of T12 used"
        />
        <div className="flex flex-col">
          <span className="text-label-14">Turn time, T12</span>
          <span className="text-label-13 text-status-danger">Next party due at 20:45</span>
        </div>
      </div>
    </div>
  );
}
