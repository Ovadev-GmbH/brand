import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-ovadev";

export default function DropdownMenuGroups() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>TICKETOVA</DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Product</DropdownMenuLabel>
          <DropdownMenuItem>Overview</DropdownMenuItem>
          <DropdownMenuItem>Shop</DropdownMenuItem>
          <DropdownMenuItem>Admission control</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Site</DropdownMenuLabel>
          <DropdownMenuItem>Changelog</DropdownMenuItem>
          <DropdownMenuItem>Request a quote</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
