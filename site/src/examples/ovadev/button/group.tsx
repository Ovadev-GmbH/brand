import { Button, ButtonGroup } from "@ovadev-gmbh/ui-ovadev";

export default function ButtonGroupExample() {
  return (
    <ButtonGroup aria-label="Language">
      <Button variant="outline">DE</Button>
      <Button variant="outline">EN</Button>
      <Button variant="outline">FR</Button>
    </ButtonGroup>
  );
}
