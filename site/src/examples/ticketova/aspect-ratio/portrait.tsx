import { AspectRatio } from "@ovadev-gmbh/ui-ticketova";

export default function AspectRatioPortrait() {
  return (
    <figure className="flex w-36 flex-col gap-2">
      <AspectRatio ratio={9 / 16} className="bg-surface-secondary">
        <div className="flex size-full flex-col items-center justify-center gap-1">
          <span className="text-label-13-mono">1080 × 1920</span>
          <span className="text-label-12 text-content-secondary">IMG_4821.png</span>
        </div>
      </AspectRatio>
      <figcaption className="text-label-12 text-content-secondary">
        Attached to <span className="text-label-12-mono text-content-primary">SUP-2291</span>
      </figcaption>
    </figure>
  );
}
