import { Button, ButtonGroup, ButtonGroupText, Input, Label } from "@ovadev-gmbh/ui-januna";

export default function ButtonGroupWithText() {
  return (
    <ButtonGroup className="w-96">
      <ButtonGroupText render={<Label htmlFor="button-group-text-deposit" />}>Deposit per guest</ButtonGroupText>
      <Input id="button-group-text-deposit" className="text-right" defaultValue="25.00" />
      <ButtonGroupText>CHF</ButtonGroupText>
      <Button variant="outline">Save</Button>
    </ButtonGroup>
  );
}
