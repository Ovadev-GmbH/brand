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
} from "@ovadev-gmbh/ui-januna";

export default function ItemAvatar() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemMedia>
        <Avatar>
          <AvatarFallback>NW</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Nina Weber</ItemTitle>
        <ItemDescription>Invited as Host on 11 September, not joined yet</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Resend invite
        </Button>
        <Button variant="ghost" size="sm">
          Revoke
        </Button>
      </ItemActions>
    </Item>
  );
}
