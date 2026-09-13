import { Gauge } from "@ovadev-gmbh/ui-januna";

export default function GaugeEqualArcs() {
  return (
    <div className="flex items-center gap-4">
      <Gauge
        value={62}
        size="lg"
        arcPriority="equal"
        colors={{ primary: "var(--jan-brand)", secondary: "var(--jan-content-tertiary)" }}
        aria-label="Covers in the dining room"
      />
      <dl className="grid grid-cols-[auto_auto_auto] items-center gap-x-3 gap-y-1">
        <span aria-hidden className="size-2 rounded-small bg-brand" />
        <dt className="text-label-14">Dining room</dt>
        <dd className="text-right text-label-13-mono">62%</dd>
        <span aria-hidden className="size-2 rounded-small bg-content-tertiary" />
        <dt className="text-label-14">Terrace</dt>
        <dd className="text-right text-label-13-mono">38%</dd>
      </dl>
    </div>
  );
}
