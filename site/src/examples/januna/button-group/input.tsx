import { Button, ButtonGroup, Input } from "@ovadev-gmbh/ui-januna";

export default function ButtonGroupWithInput() {
  return (
    <ButtonGroup className="w-96">
      <Input type="tel" aria-label="Guest phone number" placeholder="+41 79 123 45 67" />
      <Button variant="outline">Add to waitlist</Button>
    </ButtonGroup>
  );
}
