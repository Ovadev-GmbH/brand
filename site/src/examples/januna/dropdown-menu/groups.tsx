import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-januna";

export default function DropdownMenuGroups() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Terrace 3</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Table</DropdownMenuLabel>
          <DropdownMenuItem>Edit seats</DropdownMenuItem>
          <DropdownMenuItem>Combine with Terrace 4</DropdownMenuItem>
          <DropdownMenuItem>Block for tonight</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Bookings</DropdownMenuLabel>
          <DropdownMenuItem>View tonight&apos;s bookings</DropdownMenuItem>
          <DropdownMenuItem>Move bookings to another table</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
