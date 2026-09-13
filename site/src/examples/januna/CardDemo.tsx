import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ovadev-gmbh/ui-januna";

const figures = [
  { label: "Bookings", value: 42 },
  { label: "Covers", value: 118 },
  { label: "Waitlist", value: 5 },
];

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Dinner shift</CardTitle>
        <CardDescription>Friday 18 September, 18:00 to 23:00</CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-3 gap-4">
          {figures.map((figure) => (
            <div key={figure.label} className="flex flex-col gap-1">
              <dt className="text-label-13 text-content-secondary">{figure.label}</dt>
              <dd className="text-heading-24">{figure.value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
      <CardFooter className="gap-2">
        <Button>Open floor plan</Button>
        <Button variant="outline">View waitlist</Button>
      </CardFooter>
    </Card>
  );
}
