import { Button, DirectionProvider, useDirection } from "@ovadev-gmbh/ui-ovadev";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

function NextPost() {
  const direction = useDirection();
  const Chevron = direction === "rtl" ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <div dir={direction} className="flex flex-col gap-2">
      <span className="text-label-12-mono text-content-secondary">{direction}</span>
      <Button variant="outline" size="sm">
        Next post
        <Chevron data-icon="inline-end" />
      </Button>
    </div>
  );
}

export default function DirectionUseDirection() {
  return (
    <div className="flex flex-wrap gap-12">
      <DirectionProvider direction="ltr">
        <NextPost />
      </DirectionProvider>
      <DirectionProvider direction="rtl">
        <NextPost />
      </DirectionProvider>
    </div>
  );
}
