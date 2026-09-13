import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Delete02Icon, Edit02Icon } from "@hugeicons/core-free-icons";

export default function MenubarDestructive() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>Shift</MenubarTrigger>
        <MenubarContent className="w-56">
          <MenubarItem>
            <HugeiconsIcon icon={Edit02Icon} strokeWidth={2} />
            Edit shift
          </MenubarItem>
          <MenubarItem>
            <HugeiconsIcon icon={Copy01Icon} strokeWidth={2} />
            Copy to next week
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">
            <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} />
            Delete shift
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
