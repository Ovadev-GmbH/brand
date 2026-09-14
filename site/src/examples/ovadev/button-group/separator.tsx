import { Button, ButtonGroup, ButtonGroupSeparator } from "@ovadev-gmbh/ui-ovadev";

export default function ButtonGroupWithSeparator() {
  return (
    <ButtonGroup aria-label="Logo ovadev-mark.svg">
      <Button variant="secondary" size="sm">
        Copy SVG
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Download PNG
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Open guidelines
      </Button>
    </ButtonGroup>
  );
}
