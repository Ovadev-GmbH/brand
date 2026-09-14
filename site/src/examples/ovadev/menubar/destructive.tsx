import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@ovadev-gmbh/ui-ovadev";
import { PencilIcon, ReceiptIcon, Trash2Icon } from "lucide-react";

export default function MenubarDestructive() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>Tenant</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarItem>
            <PencilIcon />
            Rename
          </MenubarItem>
          <MenubarItem>
            <ReceiptIcon />
            Change plan
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">
            <Trash2Icon />
            Delete tenant
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
