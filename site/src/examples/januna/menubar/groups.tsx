import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@ovadev-gmbh/ui-januna";

export default function MenubarGroups() {
  return (
    <Menubar className="w-max">
      <MenubarMenu>
        <MenubarTrigger>Go</MenubarTrigger>
        <MenubarContent className="w-48">
          <MenubarGroup>
            <MenubarLabel>Tonight</MenubarLabel>
            <MenubarItem>Floor plan</MenubarItem>
            <MenubarItem>Run sheet</MenubarItem>
            <MenubarItem>Waitlist</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarLabel>The week</MenubarLabel>
            <MenubarItem>Covers</MenubarItem>
            <MenubarItem>Deposits</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent className="w-48">
          <MenubarGroup>
            <MenubarLabel>Data</MenubarLabel>
            <MenubarItem>Import guests</MenubarItem>
            <MenubarItem>Export bookings</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarLabel>Team</MenubarLabel>
            <MenubarItem>Shifts</MenubarItem>
            <MenubarItem>Servers</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
