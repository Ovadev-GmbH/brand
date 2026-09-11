import { Separator } from "@ovadev-gmbh/ui-januna";

export default function SeparatorDemo() {
  return (
    <div className="max-w-sm">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Dinner shift</h4>
        <p className="text-sm text-muted-foreground">Friday, 18:00 to 23:00. 42 bookings, 118 covers.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Floor plan</span>
        <Separator orientation="vertical" />
        <span>Waitlist</span>
        <Separator orientation="vertical" />
        <span>No-shows</span>
      </div>
    </div>
  );
}
