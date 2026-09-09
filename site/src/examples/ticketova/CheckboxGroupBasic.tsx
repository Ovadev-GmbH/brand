import * as React from "react";
import { Checkbox, CheckboxGroup } from "@ovadev-gmbh/ui-ticketova";

export default function CheckboxGroupBasic() {
  const id = React.useId();
  return (
    <CheckboxGroup
      aria-labelledby={id}
      defaultValue={['fuji-apple']}
    >
      <div id={id}>
        Apples
      </div>

      <label>
        <Checkbox.Root name="apple" value="fuji-apple">
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        Fuji
      </label>

      <label>
        <Checkbox.Root name="apple" value="gala-apple">
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        Gala
      </label>

      <label>
        <Checkbox.Root name="apple" value="granny-smith-apple">
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        Granny Smith
      </label>
    </CheckboxGroup>
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
