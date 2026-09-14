import {
  Avatar,
  AvatarFallback,
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@ovadev-gmbh/ui-ovadev";

export default function ItemAvatar() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemMedia>
        <Avatar>
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Anna Keller</ItemTitle>
        <ItemDescription>Gemeinde Hausen am Albis, asked for a quote on 2026-09-11</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Send quote
        </Button>
        <Button variant="ghost" size="sm">
          Decline
        </Button>
      </ItemActions>
    </Item>
  );
}
