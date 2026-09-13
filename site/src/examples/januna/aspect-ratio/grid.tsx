import { AspectRatio } from "@ovadev-gmbh/ui-januna";

const sections = [
  { name: "Dining room", tables: 14, seats: 52 },
  { name: "Terrace", tables: 8, seats: 32 },
  { name: "Bar", tables: 4, seats: 12 },
];

export default function AspectRatioGrid() {
  return (
    <ul className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
      {sections.map((section) => (
        <li key={section.name} className="flex min-w-0 flex-col gap-2">
          <AspectRatio ratio={4 / 3} className="rounded-regular bg-surface-tertiary">
            <div className="grid size-full grid-cols-4 content-center gap-2 p-4" aria-hidden>
              {Array.from({ length: section.tables }, (_, index) => (
                <span key={index} className="aspect-square rounded-small bg-surface-primary" />
              ))}
            </div>
          </AspectRatio>
          <div className="flex flex-col gap-0.5">
            <span className="text-label-14">{section.name}</span>
            <span className="text-label-12 text-content-secondary">
              {section.tables} tables, {section.seats} seats
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
