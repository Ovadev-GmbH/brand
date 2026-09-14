import {
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
} from "@ovadev-gmbh/ui-ovadev";

export default function ItemHeaderFooter() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemHeader>
        <span className="text-label-12 text-content-secondary">Blog, Engineering</span>
        <span className="text-label-12-mono text-content-tertiary">2026-09-13 14:02</span>
      </ItemHeader>
      <ItemContent>
        <ItemTitle>Why we run our own infra</ItemTitle>
        <ItemDescription>Two racks in Zürich, a pager and no cloud bill</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Edit
        </Button>
      </ItemActions>
      <ItemFooter>
        <span className="text-label-12-mono text-content-secondary">Robin, 9 min read</span>
        <span className="text-label-12-mono text-content-secondary">2'194 readers</span>
      </ItemFooter>
    </Item>
  );
}
