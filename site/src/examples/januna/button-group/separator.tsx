import { Button, ButtonGroup, ButtonGroupSeparator } from "@ovadev-gmbh/ui-januna";

export default function ButtonGroupWithSeparator() {
  return (
    <ButtonGroup aria-label="Table Terrace 3">
      <Button variant="secondary" size="sm">
        Seat
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Move
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Release
      </Button>
    </ButtonGroup>
  );
}
