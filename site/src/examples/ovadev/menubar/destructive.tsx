import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@ovadev-gmbh/ui-ovadev";
import { LanguagesIcon, PencilIcon, Trash2Icon } from "lucide-react";

export default function MenubarDestructive() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>Post</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarItem>
            <PencilIcon />
            Rename
          </MenubarItem>
          <MenubarItem>
            <LanguagesIcon />
            Translate
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">
            <Trash2Icon />
            Delete post
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
