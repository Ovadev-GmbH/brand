import * as React from "react";
import { Toolbar, ToggleGroup, Toggle, Select } from "@ovadev-gmbh/ui-januna";

export default function ToolbarBasic() {
  return (
    <Toolbar.Root>
      <ToggleGroup aria-label="Alignment">
        <Toolbar.Button
          render={<Toggle />}
          aria-label="Align left"
          value="align-left"
        >
          Align Left
        </Toolbar.Button>
        <Toolbar.Button
          render={<Toggle />}
          aria-label="Align right"
          value="align-right"
        >
          Align Right
        </Toolbar.Button>
      </ToggleGroup>
      <Toolbar.Separator />
      <Toolbar.Group aria-label="Numerical format">
        <Toolbar.Button aria-label="Format as currency">
          $
        </Toolbar.Button>
        <Toolbar.Button aria-label="Format as percent">
          %
        </Toolbar.Button>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Select.Root defaultValue="Helvetica">
        <Toolbar.Button render={<Select.Trigger />}>
          <Select.Value />
          <Select.Icon>
            <CaretUpDownIcon />
          </Select.Icon>
        </Toolbar.Button>
        <Select.Portal>
          <Select.Positioner
            sideOffset={4}
            alignItemWithTrigger={false}
          >
            <Select.Popup>
              <Select.Item value="Helvetica">
                <Select.ItemIndicator>
                  <CheckIcon />
                </Select.ItemIndicator>
                <Select.ItemText>Helvetica</Select.ItemText>
              </Select.Item>
              <Select.Item value="Arial">
                <Select.ItemIndicator>
                  <CheckIcon />
                </Select.ItemIndicator>
                <Select.ItemText>Arial</Select.ItemText>
              </Select.Item>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
      <Toolbar.Separator />
      <Toolbar.Link href="#">
        Edited 51m ago
      </Toolbar.Link>
    </Toolbar.Root>
  );
}

function CaretUpDownIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
      style={{ display: 'block', ...props.style }}
    >
      <path d="M11 10H5l3 3.5zm0-4H5l3-3.5z" />
    </svg>
  );
}

function CheckIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      {...props}
      style={{ display: 'block', ...props.style }}
    >
      <path d="m2.5 8.5 4 4 7-9" />
    </svg>
  );
}
