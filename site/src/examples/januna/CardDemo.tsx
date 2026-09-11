import { HugeiconsIcon } from "@hugeicons/react";
import { MoreHorizontalIcon } from "@hugeicons/core-free-icons";
import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ovadev-gmbh/ui-januna";

const stats = [
  { label: "Bookings", value: 42 },
  { label: "Covers", value: 118 },
  { label: "No-shows", value: 3 },
];

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Dinner shift</CardTitle>
        <CardDescription>Friday, 18:00 to 23:00</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm" aria-label="More">
            <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-label-12 text-content-secondary">{stat.label}</dt>
              <dd className="text-heading-24 tabular-nums">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
      <CardFooter className="gap-2">
        <Button>Open floor plan</Button>
        <Button variant="outline">Waitlist</Button>
      </CardFooter>
    </Card>
  );
}
