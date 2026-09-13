import { Button, ButtonGroup, Input } from "@ovadev-gmbh/ui-internal";

export default function ButtonGroupWithInput() {
  return (
    <ButtonGroup className="w-80">
      <Input type="email" aria-label="Team member e-mail" placeholder="name@ova.dev" />
      <Button variant="outline">Invite</Button>
    </ButtonGroup>
  );
}
