import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-ovadev";

export default function ContextMenuSubmenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-80 flex-col items-center justify-center gap-1 border border-dashed border-divider-strong">
        <span className="text-label-13">Gemeinde Hausen am Albis</span>
        <span className="text-label-12-mono text-content-tertiary">req_2026_0918</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>Open request</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Copy</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Request ID</ContextMenuItem>
            <ContextMenuItem>Company</ContextMenuItem>
            <ContextMenuItem>E-mail address</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Assign to</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Beni</ContextMenuItem>
            <ContextMenuItem>Robin</ContextMenuItem>
            <ContextMenuItem>Philip</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
}
