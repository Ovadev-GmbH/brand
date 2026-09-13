import { AspectRatio } from "@ovadev-gmbh/ui-internal";

const previews = [
  { id: "d-8f3a21c", environment: "production", region: "ch-zrh-1" },
  { id: "d-77b0e19", environment: "staging", region: "eu-central-1" },
  { id: "d-5c2d4a8", environment: "preview", region: "ch-zrh-1" },
];

export default function AspectRatioGrid() {
  return (
    <ul className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
      {previews.map((preview) => (
        <li key={preview.id} className="flex min-w-0 flex-col gap-2">
          <AspectRatio ratio={16 / 10} className="bg-surface-secondary">
            <div className="flex size-full items-center justify-center">
              <span className="text-label-12-mono text-content-tertiary">1440 × 900</span>
            </div>
          </AspectRatio>
          <div className="flex flex-col gap-0.5">
            <span className="text-label-13-mono">{preview.id}</span>
            <span className="text-label-12 text-content-secondary">
              {preview.environment}, <span className="text-label-12-mono">{preview.region}</span>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
