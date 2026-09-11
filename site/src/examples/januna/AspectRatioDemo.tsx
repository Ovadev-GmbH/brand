import { AspectRatio } from "@ovadev-gmbh/ui-januna";

const tables = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"];

export default function AspectRatioDemo() {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio ratio={16 / 9} className="rounded-2xl border bg-surface-secondary">
        <div className="grid size-full grid-cols-4 gap-3 p-4">
          {tables.map((table) => (
            <div
              key={table}
              className="flex items-center justify-center rounded-xl bg-surface-primary text-label-13 text-content-secondary"
            >
              {table}
            </div>
          ))}
        </div>
      </AspectRatio>
    </div>
  );
}
