import { Gauge } from "@ovadev-gmbh/ui-januna";

export default function GaugeShowValue() {
  return (
    <div className="flex items-center gap-8">
      <Gauge value={64} aria-label="Tables seated" />
      <Gauge value={64} showValue aria-label="Tables seated" />
      <span className="flex items-center gap-2">
        <Gauge value={64} size="tiny" aria-label="Tables seated" />
        <span className="text-label-13-mono">64%</span>
      </span>
    </div>
  );
}
