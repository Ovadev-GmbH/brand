import { Skeleton } from "@ovadev-gmbh/ui-internal";

export default function SkeletonDemo() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <div className="flex items-center gap-3">
        <Skeleton className="size-8" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-3 w-40" />
          <Skeleton className="h-3 w-24" />
        </div>
        <Skeleton className="h-5 w-16" />
      </div>
      <div className="flex items-center gap-3">
        <Skeleton className="size-8" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-3 w-20" />
        </div>
        <Skeleton className="h-5 w-16" />
      </div>
      <Skeleton className="h-24 w-full" />
    </div>
  );
}
