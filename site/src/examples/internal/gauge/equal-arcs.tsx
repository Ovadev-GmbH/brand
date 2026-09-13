import { Gauge } from "@ovadev-gmbh/ui-internal";

export default function GaugeEqualArcs() {
  return (
    <div className="flex items-center gap-4">
      <Gauge
        value={62}
        size="lg"
        arcPriority="equal"
        colors={{ primary: "var(--int-brand)", secondary: "var(--int-content-tertiary)" }}
        aria-label="Traffic served from ch-zrh-1"
      />
      <dl className="grid grid-cols-[auto_auto_auto] items-center gap-x-3 gap-y-1">
        <span aria-hidden className="size-2 bg-brand" />
        <dt className="text-label-13-mono">ch-zrh-1</dt>
        <dd className="text-right text-label-13-mono">62%</dd>
        <span aria-hidden className="size-2 bg-content-tertiary" />
        <dt className="text-label-13-mono">eu-central-1</dt>
        <dd className="text-right text-label-13-mono">38%</dd>
      </dl>
    </div>
  );
}
