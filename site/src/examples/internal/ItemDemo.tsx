import { Button, Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@ovadev-gmbh/ui-internal";

export default function ItemDemo() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemContent>
        <ItemTitle>Invoice export</ItemTitle>
        <ItemDescription>
          Monthly CSV for acme-logistics, next run <span className="text-label-13-mono">2026-10-01 06:00 UTC</span>
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Run export
        </Button>
      </ItemActions>
    </Item>
  );
}
