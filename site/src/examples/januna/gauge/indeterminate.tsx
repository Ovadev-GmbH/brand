import { Gauge } from "@ovadev-gmbh/ui-januna";

export default function GaugeIndeterminate() {
  return (
    <div className="flex items-center gap-3">
      <Gauge value={0} indeterminate aria-label="Covers booked tonight" />
      <div className="flex flex-col">
        <span className="text-label-14">Covers booked tonight</span>
        <span className="text-label-13 text-content-tertiary">Syncing bookings from the website</span>
      </div>
    </div>
  );
}
