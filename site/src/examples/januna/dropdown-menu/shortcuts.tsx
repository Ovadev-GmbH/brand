import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-januna";

export default function DropdownMenuShortcuts() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Booking at 19:30</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          Seat guests
          <DropdownMenuShortcut>↵</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Edit booking
          <DropdownMenuShortcut>E</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Duplicate for next week
          <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Send reminder
          <DropdownMenuShortcut>⇧⌘R</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
