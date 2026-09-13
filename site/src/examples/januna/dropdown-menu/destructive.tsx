import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Delete02Icon, Edit02Icon, Table01Icon } from "@hugeicons/core-free-icons";

export default function DropdownMenuDestructive() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Booking actions</DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuItem>
          <HugeiconsIcon icon={Edit02Icon} strokeWidth={2} />
          Edit booking
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HugeiconsIcon icon={Table01Icon} strokeWidth={2} />
          Move to table
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} />
          Cancel booking
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
