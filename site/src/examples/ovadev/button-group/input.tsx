import { Button, ButtonGroup, Input } from "@ovadev-gmbh/ui-ovadev";

export default function ButtonGroupWithInput() {
  return (
    <ButtonGroup className="w-80">
      <Input type="email" aria-label="E-mail for the newsletter" placeholder="name@example.ch" />
      <Button variant="outline">Subscribe</Button>
    </ButtonGroup>
  );
}
