import { AspectRatio } from "@ovadev-gmbh/ui-ovadev";

export default function AspectRatioSquare() {
  return (
    <figure className="flex w-40 flex-col gap-2">
      <AspectRatio ratio={1} className="bg-surface-secondary">
        <div className="flex size-full items-center justify-center text-heading-24 text-content-secondary">AL</div>
      </AspectRatio>
      <figcaption className="flex items-center justify-between gap-2">
        <span className="text-label-12-mono">acme-logistics</span>
        <span className="text-label-12-mono text-content-secondary">512 × 512</span>
      </figcaption>
    </figure>
  );
}
