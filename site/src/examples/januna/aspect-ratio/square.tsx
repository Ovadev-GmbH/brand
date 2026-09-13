import { AspectRatio } from "@ovadev-gmbh/ui-januna";

export default function AspectRatioSquare() {
  return (
    <figure className="flex w-40 flex-col gap-2">
      <AspectRatio ratio={1} className="rounded-regular bg-surface-tertiary">
        <div className="flex size-full items-center justify-center text-heading-24 text-content-secondary">TS</div>
      </AspectRatio>
      <figcaption className="flex items-center justify-between gap-2 text-label-12">
        <span>Trattoria Sole</span>
        <span className="text-content-secondary">512 × 512</span>
      </figcaption>
    </figure>
  );
}
