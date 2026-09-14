import { Card, CardContent, CardDescription, CardHeader, CardTitle, Skeleton } from "@ovadev-gmbh/ui-ovadev";

const figures = ["Tickets sold", "Visitors admitted", "Season passes"];

export default function SkeletonCard() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Türlersee this month</CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-40" />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {figures.map((figure) => (
          <div key={figure} className="flex items-center justify-between gap-4">
            <span className="text-label-13 text-content-secondary">{figure}</span>
            <Skeleton className="h-4 w-24" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
