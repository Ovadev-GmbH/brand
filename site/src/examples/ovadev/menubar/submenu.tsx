import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@ovadev-gmbh/ui-ovadev";

const languages = ["de-CH", "en", "fr-CH"];

export default function MenubarSubmenu() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>Post</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarItem>Open on ova.dev</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Translate to</MenubarSubTrigger>
            <MenubarSubContent>
              {languages.map((language) => (
                <MenubarItem key={language} className="text-label-13-mono">
                  {language}
                </MenubarItem>
              ))}
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Export</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Post as Markdown</MenubarItem>
              <MenubarItem>Images as ZIP</MenubarItem>
              <MenubarItem>Everything as JSON</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
