import { AspectRatio } from "@ovadev-gmbh/ui-ovadev";

// Tickets sold per hour at Badi Türlersee, 08:00 to 19:00, 2026-08-15.
const tickets = [12, 38, 64, 121, 168, 143, 155, 172, 134, 96, 41, 18];

export default function AspectRatioFill() {
  const max = Math.max(...tickets);
  const points = tickets
    .map((value, hour) => `${(hour / (tickets.length - 1)) * 100},${40 - (value / max) * 34}`)
    .join(" ");

  return (
    <figure className="flex w-full max-w-xl flex-col gap-2">
      <AspectRatio ratio={21 / 9} className="bg-surface-secondary">
        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full"
          role="img"
          aria-label="Tickets sold per hour at Badi Türlersee, rising from 12 to a peak of 172 at 15:00"
        >
          <polyline
            points={points}
            fill="none"
            strokeWidth={1.5}
            vectorEffect="non-scaling-stroke"
            className="stroke-content-primary"
          />
        </svg>
      </AspectRatio>
      <figcaption className="flex items-center justify-between gap-4 text-label-12 text-content-secondary">
        <span>Tickets sold per hour, Badi Türlersee, 08:00 to 19:00</span>
        <span>
          Peak <span className="text-label-12-mono text-content-primary">172</span>
        </span>
      </figcaption>
    </figure>
  );
}
