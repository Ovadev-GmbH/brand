import { Skeleton } from "@ovadev-gmbh/ui-januna";

export default function SkeletonDemo() {
  return (
    <div className="flex max-w-xl flex-wrap items-start gap-8">
      <div className="flex items-center gap-4">
        <Skeleton className="size-12 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <div className="flex w-64 flex-col gap-3">
        <Skeleton className="h-28 w-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    </div>
  );
}
