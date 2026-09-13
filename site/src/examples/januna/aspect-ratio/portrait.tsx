import { AspectRatio } from "@ovadev-gmbh/ui-januna";

export default function AspectRatioPortrait() {
  return (
    <figure className="flex w-36 flex-col gap-2">
      <AspectRatio ratio={9 / 16} className="rounded-regular bg-surface-secondary">
        <div className="flex size-full flex-col items-center justify-center gap-1">
          <span className="text-label-13">1080 × 1920</span>
          <span className="text-label-12 text-content-secondary">IMG_2044.jpg</span>
        </div>
      </AspectRatio>
      <figcaption className="text-label-12 text-content-secondary">
        Sent by <span className="text-content-primary">Lea Brunner</span>, booking at 19:30
      </figcaption>
    </figure>
  );
}
