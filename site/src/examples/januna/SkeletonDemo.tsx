import { Skeleton } from "@ovadev-gmbh/ui-januna";

export default function SkeletonDemo() {
  return (
    <div role="status" aria-label="Loading guest" className="flex w-full max-w-sm items-center gap-4">
      <Skeleton className="size-12 rounded-pill" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-28" />
      </div>
    </div>
  );
}
