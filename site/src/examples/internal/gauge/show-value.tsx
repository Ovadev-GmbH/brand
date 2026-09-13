import { Gauge } from "@ovadev-gmbh/ui-internal";

export default function GaugeShowValue() {
  return (
    <div className="flex items-center gap-8">
      <Gauge value={36} aria-label="Storage used" />
      <Gauge value={36} showValue aria-label="Storage used" />
      <span className="flex items-center gap-2">
        <Gauge value={36} size="tiny" aria-label="Storage used" />
        <span className="text-label-13-mono">36%</span>
      </span>
    </div>
  );
}
