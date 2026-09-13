import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@ovadev-gmbh/ui-internal";
import { ActivityIcon, CopyIcon, KeyRoundIcon, PencilIcon, RotateCwIcon } from "lucide-react";

export default function DropdownMenuIcons() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        <KeyRoundIcon data-icon="inline-start" />
        Checkout backend
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuItem>
          <CopyIcon />
          Copy key ID
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilIcon />
          Rename
        </DropdownMenuItem>
        <DropdownMenuItem>
          <RotateCwIcon />
          Rotate
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ActivityIcon />
          View usage
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
