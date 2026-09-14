import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@ovadev-gmbh/ui-ovadev";
import { EllipsisIcon } from "lucide-react";

export default function DropdownMenuAlign() {
  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>Download press kit</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Logos as SVG</DropdownMenuItem>
          <DropdownMenuItem>Logos as PNG</DropdownMenuItem>
          <DropdownMenuItem>Everything as ZIP</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="icon" aria-label="Actions for the request from Türlersee" />}>
          <EllipsisIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>Open request</DropdownMenuItem>
          <DropdownMenuItem>Reply</DropdownMenuItem>
          <DropdownMenuItem>Mark as answered</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
