import { Button, ButtonGroup } from "@ovadev-gmbh/ui-ovadev";

export default function ButtonGroupExample() {
  return (
    <ButtonGroup aria-label="Period">
      <Button variant="outline">Day</Button>
      <Button variant="outline">Week</Button>
      <Button variant="outline">Month</Button>
    </ButtonGroup>
  );
}
