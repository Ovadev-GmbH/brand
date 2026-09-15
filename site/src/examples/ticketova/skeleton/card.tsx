import { Card, CardContent, CardDescription, CardHeader, CardTitle, Skeleton } from "@ovadev-gmbh/ui-ticketova";

const limits = ["API requests", "Storage", "Seats"];

export default function SkeletonCard() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Usage this month</CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-40" />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {limits.map((limit) => (
          <div key={limit} className="flex items-center justify-between gap-4">
            <span className="text-label-13 text-content-secondary">{limit}</span>
            <Skeleton className="h-4 w-24" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
