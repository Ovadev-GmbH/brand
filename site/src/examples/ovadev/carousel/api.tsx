import * as React from "react";
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ovadev-gmbh/ui-ovadev";
import type { CarouselApi } from "@ovadev-gmbh/ui-ovadev";

const shops = [
  { name: "Türlersee", host: "tuerlersee.ticketova.ch" },
  { name: "Baar", host: "hallenbad-baar.ticketova.ch" },
  { name: "Enge", host: "seebad-enge.ticketova.ch" },
  { name: "Cham", host: "badi-cham.ticketova.ch" },
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
          {shops.map((shop) => (
            <CarouselItem key={shop.name}>
              <Card size="sm">
                <CardContent className="flex aspect-video flex-col justify-end gap-1">
                  <span className="text-label-13">{shop.name}</span>
                  <span className="truncate text-label-12-mono text-content-secondary">{shop.host}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <span aria-live="polite" className="text-label-13 text-content-secondary">
        Shop <span className="text-label-13-mono">{current}</span> of{" "}
        <span className="text-label-13-mono">{shops.length}</span>
      </span>
    </div>
  );
}
