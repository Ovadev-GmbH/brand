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
} from "@ovadev-gmbh/ui-ticketova";

export default function ItemAvatar() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemMedia>
        <Avatar>
          <AvatarFallback>LK</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>lea@ova.dev</ItemTitle>
        <ItemDescription>Invited as Billing on 2026-09-11, not joined yet</ItemDescription>
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
