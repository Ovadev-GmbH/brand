import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@ovadev-gmbh/ui-ovadev";
import { EyeIcon, FileTextIcon, LanguagesIcon, MailIcon, PlusIcon, SendIcon } from "lucide-react";

export default function MenubarIcons() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>Blog</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarItem>
            <PlusIcon />
            New post
          </MenubarItem>
          <MenubarItem>
            <LanguagesIcon />
            Translate
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <FileTextIcon />
            Revision history
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Newsletter</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarItem>
            <MailIcon />
            Compose issue
          </MenubarItem>
          <MenubarItem>
            <EyeIcon />
            Preview
          </MenubarItem>
          <MenubarItem>
            <SendIcon />
            Send to subscribers
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
