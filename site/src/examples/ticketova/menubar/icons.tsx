import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@ovadev-gmbh/ui-ticketova";
import { FileTextIcon, KeyIcon, PlusIcon, RocketIcon, ArrowCounterClockwiseIcon, ArrowClockwiseIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function MenubarIcons() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>Deployments</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarItem>
            <RocketIcon />
            Deploy main
          </MenubarItem>
          <MenubarItem>
            <ArrowCounterClockwiseIcon />
            Roll back
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <FileTextIcon />
            Build logs
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Keys</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarItem>
            <PlusIcon />
            Create key
          </MenubarItem>
          <MenubarItem>
            <ArrowClockwiseIcon />
            Rotate all keys
          </MenubarItem>
          <MenubarItem>
            <KeyIcon />
            Manage scopes
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
