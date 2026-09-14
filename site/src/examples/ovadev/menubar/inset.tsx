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
} from "@ovadev-gmbh/ui-ovadev";

export default function MenubarInset() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent className="w-56">
          <MenubarGroup>
            <MenubarLabel inset>Rows</MenubarLabel>
            <MenubarCheckboxItem defaultChecked>Show archived tenants</MenubarCheckboxItem>
            <MenubarCheckboxItem>Show trials</MenubarCheckboxItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarItem inset>Reset view</MenubarItem>
          <MenubarItem inset>
            Save as default
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
