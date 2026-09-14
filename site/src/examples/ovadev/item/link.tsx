import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@ovadev-gmbh/ui-ovadev";
import { ChevronRightIcon, ReceiptTextIcon } from "lucide-react";

export default function ItemLink() {
  return (
    <Item variant="outline" className="w-full max-w-md" render={<a href="#inv-2026-0142" />}>
      <ItemMedia variant="icon">
        <ReceiptTextIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle className="text-label-13-mono">INV-2026-0142</ItemTitle>
        <ItemDescription>acme-logistics, CHF 1'240.00, due 2026-09-30</ItemDescription>
      </ItemContent>
      <ItemActions>
        <ChevronRightIcon className="size-4 text-content-tertiary" />
      </ItemActions>
    </Item>
  );
}
