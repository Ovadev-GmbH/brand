import { AspectRatio } from "@ovadev-gmbh/ui-januna";

export default function AspectRatioDemo() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio ratio={16 / 9} className="rounded-2xl border bg-muted">
        <div className="grid size-full grid-cols-4 gap-3 p-4">
          {["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"].map((table) => (
            <div
              key={table}
              className="flex items-center justify-center rounded-xl bg-background text-sm font-medium text-muted-foreground"
            >
              {table}
            </div>
          ))}
        </div>
      </AspectRatio>
      <p className="mt-2 text-sm text-muted-foreground">Floor plan, 16:9</p>
    </div>
  );
}
