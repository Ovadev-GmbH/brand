import { Gauge } from "@ovadev-gmbh/ui-januna";

const readings = [
  { label: "Covers booked", value: 78, figure: "86 of 110" },
  { label: "Tables seated", value: 64, figure: "9 of 14" },
];

export default function GaugeWithLabel() {
  return (
    <div className="flex flex-wrap gap-8">
      {readings.map((reading) => (
        <div key={reading.label} className="flex items-center gap-3">
          <Gauge value={reading.value} showValue aria-label={reading.label} />
          <div className="flex flex-col">
            <span className="text-label-14">{reading.label}</span>
            <span className="text-label-13-mono text-content-secondary">{reading.figure}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
