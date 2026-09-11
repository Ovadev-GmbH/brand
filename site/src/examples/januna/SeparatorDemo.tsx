import { Separator } from "@ovadev-gmbh/ui-januna";

export default function SeparatorDemo() {
  return (
    <div className="w-full max-w-sm">
      <div className="grid gap-1">
        <span className="text-label-14 font-medium">Dinner shift</span>
        <p className="text-copy-13 text-content-secondary">
          Friday, 18:00 to 23:00. 42 bookings, 118 covers.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-label-13">
        <span>Floor plan</span>
        <Separator orientation="vertical" />
        <span>Waitlist</span>
        <Separator orientation="vertical" />
        <span>No-shows</span>
      </div>
    </div>
  );
}
