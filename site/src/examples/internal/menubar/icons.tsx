import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@ovadev-gmbh/ui-internal";
import { FileTextIcon, KeyRoundIcon, PlusIcon, RocketIcon, RotateCcwIcon, RotateCwIcon } from "lucide-react";

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
            <RotateCcwIcon />
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
            <RotateCwIcon />
            Rotate all keys
          </MenubarItem>
          <MenubarItem>
            <KeyRoundIcon />
            Manage scopes
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
