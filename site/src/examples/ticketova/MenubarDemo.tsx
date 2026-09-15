import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@ovadev-gmbh/ui-ticketova";

export default function MenubarDemo() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>Invoice</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New invoice <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Duplicate <MenubarShortcut>⌘D</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Download PDF</MenubarItem>
          <MenubarItem>Send to tenant</MenubarItem>
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
          <MenubarItem>Add line item</MenubarItem>
          <MenubarItem>Apply credit</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            PDF preview <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Audit trail</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
