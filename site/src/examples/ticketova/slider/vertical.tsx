import { Slider } from "@ovadev-gmbh/ui-ticketova";

const thresholds = [
  { id: "cpu", label: "CPU", value: 70 },
  { id: "memory", label: "Memory", value: 85 },
  { id: "disk", label: "Disk", value: 90 },
];

export default function SliderVertical() {
  return (
    <div className="flex h-52 items-stretch gap-10">
      {thresholds.map((threshold) => (
        <div key={threshold.id} className="flex flex-col items-center gap-2">
          <div className="min-h-0 flex-1">
            <Slider
              orientation="vertical"
              defaultValue={[threshold.value]}
              aria-labelledby={`slider-vertical-${threshold.id}`}
            />
          </div>
          <span id={`slider-vertical-${threshold.id}`} className="text-label-12 text-content-secondary">
            {threshold.label} alert, %
          </span>
        </div>
      ))}
    </div>
  );
}
