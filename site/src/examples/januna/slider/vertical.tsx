import { Slider } from "@ovadev-gmbh/ui-januna";

const seatings = [
  { time: "18:00", covers: 32 },
  { time: "19:30", covers: 64 },
  { time: "21:00", covers: 40 },
];

export default function SliderVertical() {
  return (
    <div className="flex h-52 items-stretch gap-10">
      {seatings.map((seating) => (
        <div key={seating.time} className="flex flex-col items-center gap-2">
          <div className="min-h-0 flex-1">
            <Slider
              orientation="vertical"
              defaultValue={[seating.covers]}
              max={80}
              aria-labelledby={`slider-vertical-${seating.time.replace(":", "")}`}
            />
          </div>
          <span
            id={`slider-vertical-${seating.time.replace(":", "")}`}
            className="text-label-12 text-content-secondary"
          >
            Covers at <span className="text-label-12-mono">{seating.time}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
