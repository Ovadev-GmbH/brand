import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-ticketova";
import { FileArrowDownIcon, PencilSimpleIcon, TrashIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function DropdownMenuDestructive() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Tenant actions</DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuItem>
          <PencilSimpleIcon />
          Rename
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileArrowDownIcon />
          Export data
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <TrashIcon />
          Delete tenant
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
