import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-ticketova";
import { DotsThreeIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="icon" aria-label="Actions for key sk_live_…b21c" />}>
        <DotsThreeIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-label-12-mono">sk_live_…b21c</DropdownMenuLabel>
          <DropdownMenuItem>Copy key ID</DropdownMenuItem>
          <DropdownMenuItem>Rename</DropdownMenuItem>
          <DropdownMenuItem>Rotate</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Revoke key</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
