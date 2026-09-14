import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-ovadev";

export default function ContextMenuGroups() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-80 flex-col items-center justify-center gap-1 border border-dashed border-divider-strong">
        <span className="text-label-13-mono">/blog/pool-season-2026</span>
        <span className="text-label-12 text-content-tertiary">Right-click the post</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuLabel>Post</ContextMenuLabel>
          <ContextMenuItem>Open in editor</ContextMenuItem>
          <ContextMenuItem>View readers</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Link</ContextMenuLabel>
          <ContextMenuItem>Copy URL</ContextMenuItem>
          <ContextMenuItem>Open in new tab</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
