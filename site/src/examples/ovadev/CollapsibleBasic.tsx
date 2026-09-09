import * as React from "react";
import { Collapsible } from "@ovadev-gmbh/ui-ovadev";

export default function CollapsibleBasic() {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger>
        Recovery keys
        <CaretRightIcon />
      </Collapsible.Trigger>
      <Collapsible.Panel>
        <div>
          <div>alien-bean-pasta</div>
          <div>wild-irish-burrito</div>
          <div>horse-battery-staple</div>
        </div>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}

export function CaretRightIcon(props: React.ComponentProps<'svg'>) {
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
