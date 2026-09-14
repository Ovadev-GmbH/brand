import { Button, ButtonGroup } from "@ovadev-gmbh/ui-ovadev";

export default function ButtonGroupOrientation() {
  return (
    <ButtonGroup orientation="vertical" aria-label="Press kit">
      <Button variant="outline">Download logo</Button>
      <Button variant="outline">Download fact sheet</Button>
      <Button variant="outline">Download photos</Button>
    </ButtonGroup>
  );
}
