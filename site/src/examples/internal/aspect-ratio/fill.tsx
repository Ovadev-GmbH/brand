import { AspectRatio } from "@ovadev-gmbh/ui-internal";

// API requests per hour for acme-logistics, 08:00 to 19:00.
const requests = [412, 438, 401, 466, 520, 498, 541, 603, 587, 612, 655, 640];

export default function AspectRatioFill() {
  const max = Math.max(...requests);
  const points = requests
    .map((value, hour) => `${(hour / (requests.length - 1)) * 100},${40 - (value / max) * 34}`)
    .join(" ");

  return (
    <figure className="flex w-full max-w-xl flex-col gap-2">
      <AspectRatio ratio={21 / 9} className="bg-surface-secondary">
        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full"
          role="img"
          aria-label="API requests per hour for acme-logistics, rising from 412 to a peak of 655"
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
        <span>API requests per hour, 08:00 to 19:00</span>
        <span>
          Peak <span className="text-label-12-mono text-content-primary">655</span>
        </span>
      </figcaption>
    </figure>
  );
}
