import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@ovadev-gmbh/ui-internal";

export default function MenubarDemo() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>Tenants</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New tenant
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Import from CSV</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Export list</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem defaultChecked>Show archived</MenubarCheckboxItem>
          <MenubarCheckboxItem>Show trial tenants</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarRadioGroup defaultValue="compact">
            <MenubarRadioItem value="compact">Compact rows</MenubarRadioItem>
            <MenubarRadioItem value="comfortable">Comfortable rows</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Deploy</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Redeploy
            <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Roll back</MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">Cancel running build</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
