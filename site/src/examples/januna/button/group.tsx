import { Button, ButtonGroup } from "@ovadev-gmbh/ui-januna";

export default function ButtonGroupExample() {
  return (
    <ButtonGroup aria-label="Day">
      <Button variant="outline">Yesterday</Button>
      <Button variant="outline">Tonight</Button>
      <Button variant="outline">Tomorrow</Button>
    </ButtonGroup>
  );
}
