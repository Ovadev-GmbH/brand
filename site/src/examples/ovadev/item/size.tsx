import { Button, Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@ovadev-gmbh/ui-ovadev";
import { CalendarIcon } from "lucide-react";

const sizes = ["default", "sm", "xs"] as const;

export default function ItemSize() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      {sizes.map((size) => (
        <Item key={size} variant="outline" size={size}>
          <ItemMedia variant="icon">
            <CalendarIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>
              Season opening <span className="text-label-13-mono">2027-05-01</span>
            </ItemTitle>
            <ItemDescription>Strandbad Türlersee, shop opens 2027-04-01</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size={size === "xs" ? "xs" : "sm"}>
              Details
            </Button>
          </ItemActions>
        </Item>
      ))}
    </div>
  );
}
