import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-ovadev";
import { FileDownIcon, PencilIcon, Trash2Icon } from "lucide-react";

export default function DropdownMenuDestructive() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Post actions</DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuItem>
          <PencilIcon />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileDownIcon />
          Export as Markdown
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Trash2Icon />
          Delete post
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
