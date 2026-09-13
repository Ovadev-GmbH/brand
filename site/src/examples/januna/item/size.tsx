import { Button, Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon } from "@hugeicons/core-free-icons";

const sizes = ["default", "sm", "xs"] as const;

export default function ItemSize() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      {sizes.map((size) => (
        <Item key={size} variant="outline" size={size}>
          <ItemMedia variant="icon">
            <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Luca Brunner, party of 6</ItemTitle>
            <ItemDescription>Tonight 19:00, T12, deposit paid</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size={size === "xs" ? "xs" : "sm"}>
              Seat
            </Button>
          </ItemActions>
        </Item>
      ))}
    </div>
  );
}
