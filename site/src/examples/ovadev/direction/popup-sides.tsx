import { Button, DirectionProvider, Tooltip, TooltipContent, TooltipTrigger } from "@ovadev-gmbh/ui-ovadev";
import { CopyIcon } from "lucide-react";

type Direction = "ltr" | "rtl";

function CopyTicket({ direction }: { direction: Direction }) {
  return (
    <DirectionProvider direction={direction}>
      <div dir={direction} className="flex items-center gap-2">
        <span className="text-label-13-mono">T-2026-018231</span>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="icon-sm" aria-label={`Copy ticket number, ${direction}`} />}>
            <CopyIcon />
          </TooltipTrigger>
          <TooltipContent side="inline-end">Copy, {direction}</TooltipContent>
        </Tooltip>
      </div>
    </DirectionProvider>
  );
}

export default function DirectionPopupSides() {
  return (
    <div className="flex flex-wrap gap-16">
      <CopyTicket direction="ltr" />
      <CopyTicket direction="rtl" />
    </div>
  );
}
