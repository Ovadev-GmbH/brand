import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@ovadev-gmbh/ui-ovadev";

export default function DropdownMenuDisabled() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Post 2026-09-14</DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuItem>Open on ova.dev</DropdownMenuItem>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem disabled>
          Translate to German
          <span className="ml-auto text-label-12 text-content-tertiary">Already translated</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          Publish
          <span className="ml-auto text-label-12 text-content-tertiary">Already live</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
