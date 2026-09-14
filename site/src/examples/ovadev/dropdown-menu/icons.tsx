import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@ovadev-gmbh/ui-ovadev";
import { BarChart3Icon, CopyIcon, FileTextIcon, LanguagesIcon, PencilIcon } from "lucide-react";

export default function DropdownMenuIcons() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        <FileTextIcon data-icon="inline-start" />
        Pool season 2026
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuItem>
          <CopyIcon />
          Copy link
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilIcon />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LanguagesIcon />
          Translate
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BarChart3Icon />
          View readers
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
