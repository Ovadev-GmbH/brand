import * as React from "react";
import { Menubar, Menu } from "@ovadev-gmbh/ui-ticketova";

export default function MenubarBasic() {
  return (
    <Menubar>
      <Menu.Root>
        <Menu.Trigger>File</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={4}>
            <Menu.Popup>
              <Menu.Item onClick={handleClick}>
                New
              </Menu.Item>
              <Menu.Item onClick={handleClick}>
                Open
              </Menu.Item>
              <Menu.Item onClick={handleClick}>
                Save
              </Menu.Item>

              <Menu.SubmenuRoot>
                <Menu.SubmenuTrigger>
                  Export
                  <CaretRightIcon />
                </Menu.SubmenuTrigger>
                <Menu.Portal>
                  <Menu.Positioner
                    sideOffset={-4}
                    alignOffset={-4}
                  >
                    <Menu.Popup>
                      <Menu.Item onClick={handleClick}>
                        PDF
                      </Menu.Item>
                      <Menu.Item onClick={handleClick}>
                        PNG
                      </Menu.Item>
                      <Menu.Item onClick={handleClick}>
                        SVG
                      </Menu.Item>
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.SubmenuRoot>

              <Menu.Separator />
              <Menu.Item onClick={handleClick}>
                Print
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger>Edit</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={4}>
            <Menu.Popup>
              <Menu.Item onClick={handleClick}>
                Cut
              </Menu.Item>
              <Menu.Item onClick={handleClick}>
                Copy
              </Menu.Item>
              <Menu.Item onClick={handleClick}>
                Paste
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger>View</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={4}>
            <Menu.Popup>
              <Menu.Item onClick={handleClick}>
                Zoom In
              </Menu.Item>
              <Menu.Item onClick={handleClick}>
                Zoom Out
              </Menu.Item>

              <Menu.SubmenuRoot>
                <Menu.SubmenuTrigger>
                  Layout
                  <CaretRightIcon />
                </Menu.SubmenuTrigger>
                <Menu.Portal>
                  <Menu.Positioner
                    sideOffset={-4}
                    alignOffset={-4}
                  >
                    <Menu.Popup>
                      <Menu.Item onClick={handleClick}>
                        Single Page
                      </Menu.Item>
                      <Menu.Item onClick={handleClick}>
                        Two Pages
                      </Menu.Item>
                      <Menu.Item onClick={handleClick}>
                        Continuous
                      </Menu.Item>
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.SubmenuRoot>

              <Menu.Separator />
              <Menu.Item onClick={handleClick}>
                Full Screen
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <Menu.Root disabled>
        <Menu.Trigger>Help</Menu.Trigger>
      </Menu.Root>
    </Menubar>
  );
}

function handleClick(event: React.MouseEvent<HTMLElement>) {
  // eslint-disable-next-line no-console
  console.log(`${event.currentTarget.textContent} clicked`);
}

function CaretRightIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
      style={{ display: 'block', ...props.style }}
    >
      <path d="M6 12V4l4.5 4z" />
    </svg>
  );
}
