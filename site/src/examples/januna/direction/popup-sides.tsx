import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon } from "@hugeicons/core-free-icons";
import { Button, DirectionProvider, Tooltip, TooltipContent, TooltipTrigger } from "@ovadev-gmbh/ui-januna";

type Direction = "ltr" | "rtl";

function CopyReference({ direction }: { direction: Direction }) {
  return (
    <DirectionProvider direction={direction}>
      <div dir={direction} className="flex items-center gap-2">
        <span className="text-label-13-mono">JAN-4821</span>
        <Tooltip>
          <TooltipTrigger
            render={<Button variant="outline" size="icon-sm" aria-label={`Copy booking reference, ${direction}`} />}
          >
            <HugeiconsIcon icon={Copy01Icon} strokeWidth={2} />
          </TooltipTrigger>
          <TooltipContent side="inline-end">Copy reference, {direction}</TooltipContent>
        </Tooltip>
      </div>
    </DirectionProvider>
  );
}

export default function DirectionPopupSides() {
  return (
    <div className="flex flex-wrap gap-16">
      <CopyReference direction="ltr" />
      <CopyReference direction="rtl" />
    </div>
  );
}
