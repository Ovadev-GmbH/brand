import { Button, ButtonGroup, ButtonGroupSeparator } from "@ovadev-gmbh/ui-internal";

export default function ButtonGroupWithSeparator() {
  return (
    <ButtonGroup aria-label="API key sk_live_4f9a">
      <Button variant="secondary" size="sm">
        Copy prefix
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Rename
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Rotate
      </Button>
    </ButtonGroup>
  );
}
