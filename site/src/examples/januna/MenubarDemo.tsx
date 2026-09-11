import * as React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@ovadev-gmbh/ui-januna";

export default function MenubarDemo() {
  const [showWaitlist, setShowWaitlist] = React.useState(true);
  const [layout, setLayout] = React.useState("floor");

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Bookings</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New booking
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Walk-in
            <MenubarShortcut>⌘W</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Export</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Run sheet (PDF)</MenubarItem>
              <MenubarItem>Guest list (CSV)</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print run sheet
            <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Tables</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Add table</MenubarItem>
          <MenubarItem>Combine tables</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Block for private event</MenubarItem>
          <MenubarItem disabled>Release all tables</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            checked={showWaitlist}
            onCheckedChange={setShowWaitlist}
          >
            Show waitlist
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarRadioGroup value={layout} onValueChange={setLayout}>
            <MenubarRadioItem value="floor">Floor plan</MenubarRadioItem>
            <MenubarRadioItem value="timeline">Timeline</MenubarRadioItem>
            <MenubarRadioItem value="list">List</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem>
            Reload
            <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
