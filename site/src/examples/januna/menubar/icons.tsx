import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, Download01Icon, PrinterIcon, Search01Icon, UserAdd01Icon, UserIcon } from "@hugeicons/core-free-icons";

export default function MenubarIcons() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>Bookings</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarItem>
            <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
            New booking
          </MenubarItem>
          <MenubarItem>
            <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
            Walk-in
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <HugeiconsIcon icon={PrinterIcon} strokeWidth={2} />
            Print run sheet
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Guests</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarItem>
            <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
            Find guest
          </MenubarItem>
          <MenubarItem>
            <HugeiconsIcon icon={UserAdd01Icon} strokeWidth={2} />
            Add guest
          </MenubarItem>
          <MenubarItem>
            <HugeiconsIcon icon={Download01Icon} strokeWidth={2} />
            Import from CSV
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
