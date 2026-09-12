import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-internal";
import {
  ArrowsClockwiseIcon,
  CopyIcon,
  FileTextIcon,
  TrashIcon,
} from "@phosphor-icons/react";

export default function DropdownMenuDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>
          Deployment actions
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>
            <span className="text-label-12-mono">dpl_8f3a · production</span>
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <ArrowsClockwiseIcon />
              Redeploy
              <DropdownMenuShortcut>R</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileTextIcon />
              View build logs
              <DropdownMenuShortcut>L</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CopyIcon />
              Copy deployment URL
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Promote to</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Staging</DropdownMenuItem>
              <DropdownMenuItem>Production</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <TrashIcon />
            Delete deployment
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
