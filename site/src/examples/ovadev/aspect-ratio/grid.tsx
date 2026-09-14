import { AspectRatio } from "@ovadev-gmbh/ui-ovadev";

const previews = [
  { path: "/about", title: "About us", language: "en" },
  { path: "/blog", title: "Blog", language: "en" },
  { path: "/de/kontakt", title: "Kontakt", language: "de" },
];

export default function AspectRatioGrid() {
  return (
    <ul className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
      {previews.map((preview) => (
        <li key={preview.path} className="flex min-w-0 flex-col gap-2">
          <AspectRatio ratio={16 / 10} className="bg-surface-secondary">
            <div className="flex size-full items-center justify-center">
              <span className="text-label-12-mono text-content-tertiary">1440 × 900</span>
            </div>
          </AspectRatio>
          <div className="flex flex-col gap-0.5">
            <span className="text-label-13-mono">{preview.path}</span>
            <span className="text-label-12 text-content-secondary">
              {preview.title}, <span className="text-label-12-mono">{preview.language}</span>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
