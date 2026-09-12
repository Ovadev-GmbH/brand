import { AspectRatio } from "@ovadev-gmbh/ui-internal";

export default function AspectRatioDemo() {
  return (
    <div className="w-full max-w-xl">
      <AspectRatio ratio={16 / 9} className="border bg-surface-secondary">
        <div className="flex size-full flex-col items-center justify-center gap-1">
          <span className="text-label-13-mono">16 : 9</span>
          <span className="text-label-12 text-content-secondary">deployment preview, 1280 × 720</span>
        </div>
      </AspectRatio>
    </div>
  );
}
