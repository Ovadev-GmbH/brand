import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@ovadev-gmbh/ui-januna";

export default function MenubarInset() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent className="w-56">
          <MenubarGroup>
            <MenubarLabel inset>Floor plan</MenubarLabel>
            <MenubarCheckboxItem defaultChecked>Show table numbers</MenubarCheckboxItem>
            <MenubarCheckboxItem>Show servers</MenubarCheckboxItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarItem inset>Reset zoom</MenubarItem>
          <MenubarItem inset>
            Save as default
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
