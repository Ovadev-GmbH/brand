import { Button, DirectionProvider, Tooltip, TooltipContent, TooltipTrigger } from "@ovadev-gmbh/ui-ticketova";
import { CopyIcon } from "@ovadev-gmbh/ui-ticketova/icons";

type Direction = "ltr" | "rtl";

function CopyInvoice({ direction }: { direction: Direction }) {
  return (
    <DirectionProvider direction={direction}>
      <div dir={direction} className="flex items-center gap-2">
        <span className="text-label-13-mono">INV-2026-0142</span>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="icon-sm" aria-label={`Copy invoice number, ${direction}`} />}>
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
      <CopyInvoice direction="ltr" />
      <CopyInvoice direction="rtl" />
    </div>
  );
}
