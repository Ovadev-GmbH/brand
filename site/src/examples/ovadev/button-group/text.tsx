import { Button, ButtonGroup, ButtonGroupText, Input, Label } from "@ovadev-gmbh/ui-ovadev";

export default function ButtonGroupWithText() {
  return (
    <ButtonGroup className="w-96">
      <ButtonGroupText render={<Label htmlFor="button-group-text-limit" />}>Project budget</ButtonGroupText>
      <Input id="button-group-text-limit" className="text-right text-label-13-mono" defaultValue="25'000.00" />
      <ButtonGroupText>CHF</ButtonGroupText>
      <Button variant="outline">Send</Button>
    </ButtonGroup>
  );
}
