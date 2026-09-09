import { ContextMenu } from "@ovadev-gmbh/ui-internal";

export default function ContextMenuBasic() {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>Right click here</ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Positioner>
          <ContextMenu.Popup>
            <ContextMenu.Item>Add to Library</ContextMenu.Item>
            <ContextMenu.Item>Add to Playlist</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Play Next</ContextMenu.Item>
            <ContextMenu.Item>Play Last</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Favorite</ContextMenu.Item>
            <ContextMenu.Item>Share</ContextMenu.Item>
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}
