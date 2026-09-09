import { Drawer } from "@ovadev-gmbh/ui-januna";

export default function DrawerBasic() {
  return (
    <Drawer.Root swipeDirection="right">
      <Drawer.Trigger>Open drawer</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop />
        <Drawer.Viewport>
          <Drawer.Popup>
            <Drawer.Content>
              <Drawer.Title>Drawer</Drawer.Title>
              <Drawer.Description>
                This is a drawer that slides in from the side. You can swipe to dismiss it.
              </Drawer.Description>
              <div>
                <Drawer.Close>Close</Drawer.Close>
              </div>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
