import { AspectRatio } from "@ovadev-gmbh/ui-januna";

// Covers seated per half hour, 17:30 to 22:30.
const covers = [4, 9, 16, 24, 31, 38, 34, 27, 19, 12, 6];

export default function AspectRatioFill() {
  const max = Math.max(...covers);
  const points = covers
    .map((value, slot) => `${(slot / (covers.length - 1)) * 100},${40 - (value / max) * 34}`)
    .join(" ");

  return (
    <figure className="flex w-full max-w-xl flex-col gap-2">
      <AspectRatio ratio={21 / 9} className="overflow-hidden rounded-regular bg-surface-secondary">
        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full"
          role="img"
          aria-label="Covers per half hour on Friday, rising from 4 at 17:30 to a peak of 38 at 20:00"
        >
          <polyline
            points={points}
            fill="none"
            strokeWidth={1.5}
            vectorEffect="non-scaling-stroke"
            className="stroke-brand"
          />
        </svg>
      </AspectRatio>
      <figcaption className="flex items-center justify-between gap-4 text-label-12 text-content-secondary">
        <span>Covers per half hour, 17:30 to 22:30</span>
        <span>
          Peak <span className="text-content-primary">38 at 20:00</span>
        </span>
      </figcaption>
    </figure>
  );
}
