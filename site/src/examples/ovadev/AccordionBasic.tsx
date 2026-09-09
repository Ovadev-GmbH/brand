import * as React from "react";
import { Accordion } from "@ovadev-gmbh/ui-ovadev";

export default function AccordionBasic() {
  return (
    <Accordion.Root>
      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger>
            What is Base UI?
            <PlusIcon />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div>
            Base UI is a library of high-quality unstyled React components for design systems and
            web apps.
          </div>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger>
            How do I get started?
            <PlusIcon />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div>
            Head to the “Quick start” guide in the docs. If you’ve used unstyled libraries before,
            you’ll feel at home.
          </div>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger>
            Can I use it for my project?
            <PlusIcon />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div>Of course! Base UI is free and open source.</div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  );
}

function PlusIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      {...props}
      style={{ display: 'block', ...props.style }}
    >
      <path d="M1.5 8h13M8 14.5v-13" />
    </svg>
  );
}
