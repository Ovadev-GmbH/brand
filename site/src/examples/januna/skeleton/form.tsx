import { Skeleton } from "@ovadev-gmbh/ui-januna";

const labels = ["w-24", "w-16", "w-32"];

export default function SkeletonForm() {
  return (
    <div aria-busy="true" aria-label="Loading the booking" className="flex w-80 flex-col gap-6">
      {labels.map((label, i) => (
        <div key={i} className="flex flex-col gap-3">
          <Skeleton className={`h-4 ${label}`} />
          <Skeleton className="h-10 w-full" />
        </div>
      ))}
      <Skeleton className="h-10 w-36" />
    </div>
  );
}
