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
        <span className="text-label-13-mono">dpl_4f2c91</span>
        <span className="text-label-12 text-content-tertiary">Right-click the deployment</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuLabel>Deployment</ContextMenuLabel>
          <ContextMenuItem>Open details</ContextMenuItem>
          <ContextMenuItem>View build logs</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Domain</ContextMenuLabel>
          <ContextMenuItem>Copy URL</ContextMenuItem>
          <ContextMenuItem>Open in new tab</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
