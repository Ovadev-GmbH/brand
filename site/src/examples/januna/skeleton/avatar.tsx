import { Skeleton } from "@ovadev-gmbh/ui-januna";

const rows = [
  { name: "w-28", note: "w-40" },
  { name: "w-36", note: "w-32" },
  { name: "w-24", note: "w-44" },
];

export default function SkeletonAvatar() {
  return (
    <ul aria-busy="true" aria-label="Loading the waitlist" className="flex w-80 flex-col gap-4">
      {rows.map((row, i) => (
        <li key={i} className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-pill" />
          <div className="flex flex-1 flex-col gap-1">
            <Skeleton className={`h-4 ${row.name}`} />
            <Skeleton className={`h-3 ${row.note}`} />
          </div>
          <Skeleton className="h-4 w-12" />
        </li>
      ))}
    </ul>
  );
}
