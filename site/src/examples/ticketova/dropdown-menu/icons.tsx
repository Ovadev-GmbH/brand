import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@ovadev-gmbh/ui-ticketova";
import { PulseIcon, CopyIcon, KeyIcon, PencilSimpleIcon, ArrowClockwiseIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function DropdownMenuIcons() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        <KeyIcon data-icon="inline-start" />
        Checkout backend
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuItem>
          <CopyIcon />
          Copy key ID
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilSimpleIcon />
          Rename
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ArrowClockwiseIcon />
          Rotate
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PulseIcon />
          View usage
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
