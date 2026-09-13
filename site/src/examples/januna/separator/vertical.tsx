import { Separator } from "@ovadev-gmbh/ui-januna";

export default function SeparatorVertical() {
  return (
    <div className="flex h-5 items-center gap-3 text-label-13">
      <span>Friday, 12 September</span>
      <Separator orientation="vertical" />
      <span>Dinner</span>
      <Separator orientation="vertical" />
      <span>42 bookings</span>
      <Separator orientation="vertical" />
      <span className="text-content-secondary">118 covers</span>
    </div>
  );
}
