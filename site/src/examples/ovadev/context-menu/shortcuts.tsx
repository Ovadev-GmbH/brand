import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-ovadev";

export default function ContextMenuShortcuts() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-80 flex-col items-center justify-center gap-1 border border-dashed border-divider-strong">
        <span className="text-label-13-mono">/blog/pool-season-2026</span>
        <span className="text-label-12 text-content-tertiary">Right-click the post</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>
          Open post
          <ContextMenuShortcut>↵</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Copy link
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Export as Markdown
          <ContextMenuShortcut>⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Send to newsletter
          <ContextMenuShortcut>⇧⌘N</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
