import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@ovadev-gmbh/ui-ticketova";
import { PencilSimpleIcon, ReceiptIcon, TrashIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function MenubarDestructive() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>Tenant</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarItem>
            <PencilSimpleIcon />
            Rename
          </MenubarItem>
          <MenubarItem>
            <ReceiptIcon />
            Change plan
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">
            <TrashIcon />
            Delete tenant
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
