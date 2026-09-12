import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-internal";

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 max-w-xl items-center justify-center border border-dashed border-divider text-copy-13 text-content-secondary">
        Right-click invoice INV-2041
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuItem>
          Open
          <ContextMenuShortcut>⏎</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Copy invoice number
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Download PDF</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem defaultChecked>Mark as paid</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Flag for review</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Void invoice</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
