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
} from "@ovadev-gmbh/ui-januna";

const sections = ["Terrace", "Main room", "Bar"];

export default function MenubarSubmenu() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>Tables</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarItem>Add table</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Move to section</MenubarSubTrigger>
            <MenubarSubContent>
              {sections.map((section) => (
                <MenubarItem key={section}>{section}</MenubarItem>
              ))}
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Export</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Floor plan as PDF</MenubarItem>
              <MenubarItem>Tables as CSV</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
