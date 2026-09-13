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
} from "@ovadev-gmbh/ui-internal";

const regions = ["ch-zrh-1", "ch-gva-1", "eu-central-1"];

export default function MenubarSubmenu() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>Tenant</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarItem>Open overview</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Move to region</MenubarSubTrigger>
            <MenubarSubContent>
              {regions.map((region) => (
                <MenubarItem key={region} className="text-label-13-mono">
                  {region}
                </MenubarItem>
              ))}
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Export</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Members as CSV</MenubarItem>
              <MenubarItem>Invoices as CSV</MenubarItem>
              <MenubarItem>Everything as JSON</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
