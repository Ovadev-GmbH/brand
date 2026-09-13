import * as React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-januna";

const formats: Record<string, { label: string; text: string }> = {
  clock: { label: "Clock time", text: "Arrives at 20:15" },
  countdown: { label: "Time until arrival", text: "Arrives in 21 min" },
};

export default function ContextMenuRadioGroupExample() {
  const [format, setFormat] = React.useState("clock");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-80 max-w-full flex-col items-center justify-center gap-1 material-base">
        <span className="text-label-14">Lina Brunner, party of 6</span>
        <span className="text-label-13 text-content-secondary">{formats[format]!.text}</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuLabel>Show times as</ContextMenuLabel>
          <ContextMenuRadioGroup value={format} onValueChange={setFormat}>
            {Object.entries(formats).map(([value, f]) => (
              <ContextMenuRadioItem key={value} value={value}>
                {f.label}
              </ContextMenuRadioItem>
            ))}
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
