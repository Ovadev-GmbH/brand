import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, UserIcon } from "@hugeicons/core-free-icons";

export default function ItemLink() {
  return (
    <Item variant="outline" className="w-full max-w-md" render={<a href="#item-guest-anna-keller" />}>
      <ItemMedia variant="icon">
        <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Anna Keller</ItemTitle>
        <ItemDescription>12 visits, last on 29 August, CHF 3'480.00 this year</ItemDescription>
      </ItemContent>
      <ItemActions>
        <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4 text-content-tertiary" />
      </ItemActions>
    </Item>
  );
}
