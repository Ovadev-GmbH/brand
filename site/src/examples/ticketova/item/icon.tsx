import { Button, Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@ovadev-gmbh/ui-ticketova";
import { KeyIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function ItemIcon() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemMedia variant="icon">
        <KeyIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Checkout backend</ItemTitle>
        <ItemDescription>
          <span className="text-label-13-mono">sk_live_4f9a…</span> last used 2026-09-13 14:02 UTC
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Rotate key
        </Button>
      </ItemActions>
    </Item>
  );
}
