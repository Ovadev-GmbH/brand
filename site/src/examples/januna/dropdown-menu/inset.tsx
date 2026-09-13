import {
  Avatar,
  AvatarFallback,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Logout01Icon, Settings01Icon, UserIcon } from "@hugeicons/core-free-icons";

export default function DropdownMenuInset() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" size="icon" aria-label="Account menu" />}>
        <Avatar size="sm">
          <AvatarFallback>SR</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuGroup>
          <DropdownMenuLabel inset>Sofia Rossi, manager</DropdownMenuLabel>
          <DropdownMenuItem>
            <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
            Restaurant settings
          </DropdownMenuItem>
          <DropdownMenuItem inset>Opening hours</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <HugeiconsIcon icon={Logout01Icon} strokeWidth={2} />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
