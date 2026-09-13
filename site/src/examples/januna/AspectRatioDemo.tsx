import { AspectRatio } from "@ovadev-gmbh/ui-januna";

// Each table's position on the terrace, in percent of its width and height.
const tables = [
  { name: "T8", left: 8, top: 18 },
  { name: "T9", left: 30, top: 18 },
  { name: "T10", left: 52, top: 18 },
  { name: "T11", left: 8, top: 60 },
  { name: "T12", left: 38, top: 56, wide: true },
];

export default function AspectRatioDemo() {
  return (
    <figure className="flex w-full max-w-md flex-col gap-2">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-regular bg-surface-tertiary">
        {tables.map((table) => (
          <div
            key={table.name}
            style={{ left: `${table.left}%`, top: `${table.top}%` }}
            className={`absolute flex h-1/4 items-center justify-center rounded-small bg-surface-primary text-label-13 ${table.wide ? "w-2/5" : "w-1/6"}`}
          >
            {table.name}
          </div>
        ))}
      </AspectRatio>
      <figcaption className="flex items-center justify-between gap-4 text-label-12 text-content-secondary">
        <span>Terrace, 5 tables</span>
        <span>T12 held for Keller, party of 6</span>
      </figcaption>
    </figure>
  );
}
