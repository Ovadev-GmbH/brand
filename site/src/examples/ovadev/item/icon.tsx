import { Button, Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@ovadev-gmbh/ui-ovadev";
import { FileDownIcon } from "lucide-react";

export default function ItemIcon() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemMedia variant="icon">
        <FileDownIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Press kit</ItemTitle>
        <ItemDescription>
          Logo, mark and the three portraits, <span className="text-label-13-mono">ZIP, 4.2 MB</span>
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Download
        </Button>
      </ItemActions>
    </Item>
  );
}
