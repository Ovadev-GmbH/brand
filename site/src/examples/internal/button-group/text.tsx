import { Button, ButtonGroup, ButtonGroupText, Input, Label } from "@ovadev-gmbh/ui-internal";

export default function ButtonGroupWithText() {
  return (
    <ButtonGroup className="w-96">
      <ButtonGroupText render={<Label htmlFor="button-group-text-limit" />}>Monthly limit</ButtonGroupText>
      <Input id="button-group-text-limit" className="text-right text-label-13-mono" defaultValue="2'500.00" />
      <ButtonGroupText>CHF</ButtonGroupText>
      <Button variant="outline">Save</Button>
    </ButtonGroup>
  );
}
