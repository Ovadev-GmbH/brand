import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ovadev-gmbh/ui-ovadev";

const pools = [
  { name: "Türlersee", tickets: 9380 },
  { name: "Baar", tickets: 2140 },
  { name: "Enge", tickets: 11250 },
  { name: "Cham", tickets: 4960 },
  { name: "Herti", tickets: 1870 },
];

export default function CarouselSize() {
  return (
    <div className="w-full max-w-xl px-12">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {pools.map((pool) => (
            <CarouselItem key={pool.name} className="basis-1/2 sm:basis-1/3">
              <Card size="sm">
                <CardContent className="flex flex-col gap-1">
                  <span className="text-label-13">{pool.name}</span>
                  <span className="text-label-12 text-content-secondary">
                    <span className="text-label-12-mono">{pool.tickets}</span> tickets in September
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
