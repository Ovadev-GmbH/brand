import * as React from "react";
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ovadev-gmbh/ui-ticketova";
import type { CarouselApi } from "@ovadev-gmbh/ui-ticketova";

const previews = [
  { branch: "pr-412", host: "pr-412.acme-logistics.preview.ova.dev" },
  { branch: "pr-409", host: "pr-409.acme-logistics.preview.ova.dev" },
  { branch: "pr-405", host: "pr-405.acme-logistics.preview.ova.dev" },
  { branch: "pr-398", host: "pr-398.acme-logistics.preview.ova.dev" },
];

export default function CarouselWithApi() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);

  React.useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap() + 1);
    update();
    api.on("select", update);
    return () => {
      api.off("select", update);
    };
  }, [api]);

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3 px-12">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {previews.map((preview) => (
            <CarouselItem key={preview.branch}>
              <Card size="sm">
                <CardContent className="flex aspect-video flex-col justify-end gap-1">
                  <span className="text-label-13-mono">{preview.branch}</span>
                  <span className="truncate text-label-12-mono text-content-secondary">{preview.host}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <span aria-live="polite" className="text-label-13 text-content-secondary">
        Preview <span className="text-label-13-mono">{current}</span> of{" "}
        <span className="text-label-13-mono">{previews.length}</span>
      </span>
    </div>
  );
}
