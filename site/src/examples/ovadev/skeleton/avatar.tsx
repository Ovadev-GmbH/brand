import { Skeleton } from "@ovadev-gmbh/ui-ovadev";

const rows = [
  { name: "w-28", role: "w-40" },
  { name: "w-36", role: "w-44" },
  { name: "w-24", role: "w-36" },
];

export default function SkeletonAvatar() {
  return (
    <ul className="flex w-80 flex-col gap-4">
      {rows.map((row, i) => (
        <li key={i} className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-regular" />
          <div className="flex flex-1 flex-col gap-1">
            <Skeleton className={`h-4 ${row.name}`} />
            <Skeleton className={`h-3 ${row.role}`} />
          </div>
          <Skeleton className="h-4 w-12" />
        </li>
      ))}
    </ul>
  );
}
