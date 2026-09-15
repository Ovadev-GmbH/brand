import { Button, DirectionProvider, useDirection } from "@ovadev-gmbh/ui-ticketova";
import { CaretLeftIcon, CaretRightIcon } from "@ovadev-gmbh/ui-ticketova/icons";

function NextInvoice() {
  const direction = useDirection();
  const Chevron = direction === "rtl" ? CaretLeftIcon : CaretRightIcon;

  return (
    <div dir={direction} className="flex flex-col gap-2">
      <span className="text-label-12-mono text-content-secondary">{direction}</span>
      <Button variant="outline" size="sm">
        Next invoice
        <Chevron data-icon="inline-end" />
      </Button>
    </div>
  );
}

export default function DirectionUseDirection() {
  return (
    <div className="flex flex-wrap gap-12">
      <DirectionProvider direction="ltr">
        <NextInvoice />
      </DirectionProvider>
      <DirectionProvider direction="rtl">
        <NextInvoice />
      </DirectionProvider>
    </div>
  );
}
