import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon, Link01Icon, Message01Icon, NoteEditIcon, UserIcon } from "@hugeicons/core-free-icons";

export default function DropdownMenuIcons() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        <HugeiconsIcon icon={UserIcon} strokeWidth={2} data-icon="inline-start" />
        Nora Keller
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuItem>
          <HugeiconsIcon icon={Call02Icon} strokeWidth={2} />
          Call guest
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HugeiconsIcon icon={Message01Icon} strokeWidth={2} />
          Send SMS
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HugeiconsIcon icon={NoteEditIcon} strokeWidth={2} />
          Add note
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HugeiconsIcon icon={Link01Icon} strokeWidth={2} />
          Copy booking link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
