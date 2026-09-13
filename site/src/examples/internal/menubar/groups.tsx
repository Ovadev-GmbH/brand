import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@ovadev-gmbh/ui-internal";

export default function MenubarGroups() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>Go</MenubarTrigger>
        <MenubarContent className="w-48">
          <MenubarGroup>
            <MenubarLabel>Tenants</MenubarLabel>
            <MenubarItem>All tenants</MenubarItem>
            <MenubarItem>Trials</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarLabel>Billing</MenubarLabel>
            <MenubarItem>Invoices</MenubarItem>
            <MenubarItem>Plans</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent className="w-48">
          <MenubarGroup>
            <MenubarLabel>Data</MenubarLabel>
            <MenubarItem>Import CSV</MenubarItem>
            <MenubarItem>Export CSV</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarLabel>Access</MenubarLabel>
            <MenubarItem>API keys</MenubarItem>
            <MenubarItem>Audit log</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
