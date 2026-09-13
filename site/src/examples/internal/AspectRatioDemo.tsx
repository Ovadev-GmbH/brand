import { AspectRatio } from "@ovadev-gmbh/ui-internal";

export default function AspectRatioDemo() {
  return (
    <figure className="flex w-full max-w-md flex-col gap-2">
      <AspectRatio ratio={16 / 9} className="bg-surface-secondary">
        <div
          role="img"
          aria-label="Preview of billing.ova.dev after deployment d-8f3a21c"
          className="flex size-full flex-col gap-3 p-4"
        >
          <div className="h-3 w-1/3 bg-surface-quaternary" />
          <div className="flex flex-1 gap-3">
            <div className="w-1/4 bg-surface-primary" />
            <div className="flex-1 bg-surface-primary" />
          </div>
        </div>
      </AspectRatio>
      <figcaption className="flex items-center justify-between gap-4 text-label-12 text-content-secondary">
        <span className="text-label-12-mono">d-8f3a21c</span>
        <span className="text-label-12-mono">1280 × 720</span>
      </figcaption>
    </figure>
  );
}
