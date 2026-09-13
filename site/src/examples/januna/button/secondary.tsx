import { Button } from "@ovadev-gmbh/ui-januna";

export default function ButtonSecondary() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="secondary">Move to waitlist</Button>
      <Button>Seat party of 6</Button>
    </div>
  );
}
