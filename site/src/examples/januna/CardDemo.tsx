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
          <div>
            <dt className="text-xs text-muted-foreground">Bookings</dt>
            <dd className="text-2xl font-medium tabular-nums">42</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">Covers</dt>
            <dd className="text-2xl font-medium tabular-nums">118</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">No-shows</dt>
            <dd className="text-2xl font-medium tabular-nums">3</dd>
          </div>
        </dl>
      </CardContent>
      <CardFooter className="gap-2">
        <Button>Open floor plan</Button>
        <Button variant="outline">Waitlist</Button>
      </CardFooter>
    </Card>
  );
}
