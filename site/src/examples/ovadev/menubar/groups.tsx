import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@ovadev-gmbh/ui-ovadev";

export default function MenubarGroups() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>Go</MenubarTrigger>
        <MenubarContent className="w-48">
          <MenubarGroup>
            <MenubarLabel>Blog</MenubarLabel>
            <MenubarItem>All posts</MenubarItem>
            <MenubarItem>Drafts</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarLabel>Site</MenubarLabel>
            <MenubarItem>Brand pages</MenubarItem>
            <MenubarItem>Changelog</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent className="w-48">
          <MenubarGroup>
            <MenubarLabel>Content</MenubarLabel>
            <MenubarItem>Import Markdown</MenubarItem>
            <MenubarItem>Export Markdown</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarLabel>Outreach</MenubarLabel>
            <MenubarItem>Newsletter</MenubarItem>
            <MenubarItem>Press kit</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
