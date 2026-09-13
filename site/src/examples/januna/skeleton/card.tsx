import { Card, CardContent, CardDescription, CardHeader, CardTitle, Skeleton } from "@ovadev-gmbh/ui-januna";

const rows = ["Covers booked", "Tables seated", "Waitlist", "Deposits"];

export default function SkeletonCard() {
  return (
    <Card className="w-80" aria-busy="true">
      <CardHeader>
        <CardTitle>Tonight</CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-40" />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {rows.map((row) => (
          <div key={row} className="flex items-center justify-between gap-4">
            <span className="text-label-14 text-content-secondary">{row}</span>
            <Skeleton className="h-4 w-20" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
