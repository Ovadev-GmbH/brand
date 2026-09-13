import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ovadev-gmbh/ui-januna";

const nights = [
  { night: "Wed 9 Sep", revenue: "5'120.00" },
  { night: "Thu 10 Sep", revenue: "8'240.50" },
  { night: "Fri 11 Sep", revenue: "12'980.00" },
  { night: "Sat 12 Sep", revenue: "14'375.20" },
  { night: "Sun 13 Sep", revenue: "8'790.00" },
];

export default function CarouselSpacing() {
  return (
    <div className="w-full max-w-xl px-12">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent className="-ml-2">
          {nights.map((n) => (
            <CarouselItem key={n.night} className="basis-1/2 pl-2 sm:basis-1/3">
              <Card size="sm">
                <CardContent className="flex flex-col gap-1">
                  <span className="text-label-13 text-content-secondary">{n.night}</span>
                  <span className="text-label-13-mono">CHF {n.revenue}</span>
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
