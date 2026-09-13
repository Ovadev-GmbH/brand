import { Button, Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { CreditCardIcon } from "@hugeicons/core-free-icons";

export default function ItemIcon() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemMedia variant="icon">
        <HugeiconsIcon icon={CreditCardIcon} strokeWidth={2} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Deposit for Anna Keller</ItemTitle>
        <ItemDescription>
          <span className="text-label-13-mono">CHF 120.00</span>, charged Wednesday at{" "}
          <span className="text-label-13-mono">19:30</span>
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Refund deposit
        </Button>
      </ItemActions>
    </Item>
  );
}
