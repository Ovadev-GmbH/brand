import { Gauge } from "@ovadev-gmbh/ui-januna";

const sizes = ["tiny", "sm", "default", "lg"] as const;

export default function GaugeSize() {
  return (
    <div className="flex items-end gap-8">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Gauge value={78} size={size} showValue aria-label="Covers booked tonight" />
          <span className="text-label-12-mono text-content-tertiary">{size}</span>
        </div>
      ))}
    </div>
  );
}
