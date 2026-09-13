import {
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
} from "@ovadev-gmbh/ui-internal";

export default function ItemHeaderFooter() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemHeader>
        <span className="text-label-12 text-content-secondary">Production, ch-zrh-1</span>
        <span className="text-label-12-mono text-content-tertiary">2026-09-13 14:02 UTC</span>
      </ItemHeader>
      <ItemContent>
        <ItemTitle>api-gateway</ItemTitle>
        <ItemDescription>Retry failed invoice webhooks with exponential backoff</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Roll back
        </Button>
      </ItemActions>
      <ItemFooter>
        <span className="text-label-12-mono text-content-secondary">8f3a21c by robin@ova.dev</span>
        <span className="text-label-12-mono text-content-secondary">42 s</span>
      </ItemFooter>
    </Item>
  );
}
