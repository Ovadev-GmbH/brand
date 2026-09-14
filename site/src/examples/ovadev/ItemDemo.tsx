import { Button, Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@ovadev-gmbh/ui-ovadev";

export default function ItemDemo() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemContent>
        <ItemTitle>Season report</ItemTitle>
        <ItemDescription>
          PDF for Strandbad Türlersee, sent on <span className="text-label-13-mono">2026-09-21 06:00</span>
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Send now
        </Button>
      </ItemActions>
    </Item>
  );
}
