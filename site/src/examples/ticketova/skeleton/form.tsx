import { Skeleton } from "@ovadev-gmbh/ui-ticketova";

const fields = ["w-24", "w-16", "w-32"];

export default function SkeletonForm() {
  return (
    <div className="flex w-80 flex-col gap-6">
      {fields.map((label, i) => (
        <div key={i} className="flex flex-col gap-2">
          <Skeleton className={`h-4 ${label}`} />
          <Skeleton className="h-8 w-full" />
        </div>
      ))}
      <Skeleton className="h-8 w-28" />
    </div>
  );
}
