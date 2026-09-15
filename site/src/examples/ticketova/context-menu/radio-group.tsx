import * as React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-ticketova";

const zones: Record<string, { label: string; time: string }> = {
  zurich: { label: "Europe/Zurich", time: "2026-09-13 16:44:12 CEST" },
  utc: { label: "UTC", time: "2026-09-13 14:44:12 UTC" },
};

export default function ContextMenuRadioGroupExample() {
  const [zone, setZone] = React.useState("zurich");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-80 flex-col items-center justify-center gap-1 border border-dashed border-divider-strong">
        <span className="text-label-13">Rotated sk_live_4f9a…</span>
        <span className="text-label-13-mono text-content-secondary">{zones[zone]!.time}</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuLabel>Time zone</ContextMenuLabel>
          <ContextMenuRadioGroup value={zone} onValueChange={setZone}>
            {Object.entries(zones).map(([value, z]) => (
              <ContextMenuRadioItem key={value} value={value}>
                {z.label}
              </ContextMenuRadioItem>
            ))}
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
