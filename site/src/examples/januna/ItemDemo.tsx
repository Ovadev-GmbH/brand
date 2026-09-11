import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon, UserGroupIcon } from "@hugeicons/core-free-icons";
import {
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@ovadev-gmbh/ui-januna";

export default function ItemDemo() {
  return (
    <ItemGroup className="max-w-md">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Anna Rossi, party of 4</ItemTitle>
          <ItemDescription>Tonight 18:30, Table 7. Birthday, window seat requested.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Seat
          </Button>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item variant="muted" size="sm">
        <ItemMedia variant="icon">
          <HugeiconsIcon icon={UserGroupIcon} strokeWidth={2} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Walk-in, party of 2</ItemTitle>
          <ItemDescription>Waiting 12 minutes. Bar seats free at 19:15.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="sm">
            Notify
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  );
}
