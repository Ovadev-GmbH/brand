import { Skeleton } from "@ovadev-gmbh/ui-ovadev";

export default function SkeletonText() {
  return (
    <div className="flex w-80 flex-col gap-2">
      <Skeleton className="h-6 w-48" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}
