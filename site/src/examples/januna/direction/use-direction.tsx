import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Button, DirectionProvider, useDirection } from "@ovadev-gmbh/ui-januna";

function NextBooking() {
  const direction = useDirection();

  return (
    <div dir={direction} className="flex flex-col gap-2">
      <span className="text-label-12-mono text-content-secondary">{direction}</span>
      <Button variant="outline" size="sm">
        Next booking
        <HugeiconsIcon
          icon={direction === "rtl" ? ArrowLeft01Icon : ArrowRight01Icon}
          strokeWidth={2}
          data-icon="inline-end"
        />
      </Button>
    </div>
  );
}

export default function DirectionUseDirection() {
  return (
    <div className="flex flex-wrap gap-12">
      <DirectionProvider direction="ltr">
        <NextBooking />
      </DirectionProvider>
      <DirectionProvider direction="rtl">
        <NextBooking />
      </DirectionProvider>
    </div>
  );
}
