import { Button, ButtonGroup } from "@ovadev-gmbh/ui-januna";

export default function ButtonGroupOrientation() {
  return (
    <ButtonGroup orientation="vertical" aria-label="Booking at 19:30, party of 6">
      <Button variant="outline">Seat now</Button>
      <Button variant="outline">Move to waitlist</Button>
      <Button variant="outline">Mark as no-show</Button>
    </ButtonGroup>
  );
}
