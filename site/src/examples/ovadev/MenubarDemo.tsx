import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@ovadev-gmbh/ui-ovadev";

export default function MenubarDemo() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>Post</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New post <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Duplicate <MenubarShortcut>⌘D</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Export as Markdown</MenubarItem>
          <MenubarItem>Send to newsletter</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Add image</MenubarItem>
          <MenubarItem>Add German translation</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Preview <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Revision history</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
