import * as React from "react";
import { Toggle, ToggleGroup } from "@ovadev-gmbh/ui-januna";

export default function ToggleGroupBasic() {
  return (
    <ToggleGroup aria-label="Text alignment" defaultValue={['left']}>
      <Toggle aria-label="Align left" value="left">
        <AlignLeftIcon />
      </Toggle>
      <Toggle aria-label="Align center" value="center">
        <AlignCenterIcon />
      </Toggle>
      <Toggle aria-label="Align right" value="right">
        <AlignRightIcon />
      </Toggle>
    </ToggleGroup>
  );
}

function AlignLeftIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      stroke="currentColor"
      {...props}
      style={{ display: 'block', ...props.style }}
    >
      <path strokeLinecap="square" strokeLinejoin="round" d="M2.5 4.5h11m-11 7h9M2.5 8h5" />
    </svg>
  );
}

function AlignCenterIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      stroke="currentColor"
      {...props}
      style={{ display: 'block', ...props.style }}
    >
      <path strokeLinecap="square" strokeLinejoin="round" d="M2.5 4.5h11m-10 7h9M5.5 8h5" />
    </svg>
  );
}

function AlignRightIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      stroke="currentColor"
      {...props}
      style={{ display: 'block', ...props.style }}
    >
      <path strokeLinecap="square" strokeLinejoin="round" d="M2.5 4.5h11m-9 7h9M8.5 8h5" />
    </svg>
  );
}
