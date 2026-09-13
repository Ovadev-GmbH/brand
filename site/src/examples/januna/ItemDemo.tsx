import { Button, Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@ovadev-gmbh/ui-januna";

export default function ItemDemo() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemContent>
        <ItemTitle>Weber, party of 4</ItemTitle>
        <ItemDescription>Waiting for 12 minutes, happy with the terrace or inside</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Notify guest
        </Button>
      </ItemActions>
    </Item>
  );
}
