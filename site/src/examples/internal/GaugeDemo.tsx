import { Gauge } from "@ovadev-gmbh/ui-internal";

export default function GaugeDemo() {
  return (
    <div className="flex max-w-xl flex-wrap items-center gap-6">
      <Gauge value={12} showValue aria-label="Storage quota used" />
      <Gauge value={45} showValue arcPriority="equal" aria-label="Seats in use" />
      <Gauge value={72} showValue aria-label="API rate limit used" />
      <Gauge
        value={91}
        size="lg"
        showValue
        colors={{ primary: "var(--int-red-800)", secondary: "var(--int-red-100)" }}
        aria-label="Disk on worker-3"
      />
      <div className="flex h-12 items-center gap-3">
        <Gauge value={72} size="sm" showValue aria-label="API rate limit used" />
        <Gauge value={72} size="tiny" aria-label="API rate limit used" />
        <Gauge value={0} size="sm" indeterminate aria-label="Collecting metrics" />
      </div>
    </div>
  );
}
