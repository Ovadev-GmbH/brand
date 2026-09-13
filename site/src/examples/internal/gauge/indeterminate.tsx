import { Gauge } from "@ovadev-gmbh/ui-internal";

export default function GaugeIndeterminate() {
  return (
    <div className="flex items-center gap-3">
      <Gauge value={0} indeterminate aria-label="Disk on worker-3" />
      <div className="flex flex-col">
        <span className="text-label-13">Disk on worker-3</span>
        <span className="text-label-13 text-content-tertiary">Collecting usage</span>
      </div>
    </div>
  );
}
