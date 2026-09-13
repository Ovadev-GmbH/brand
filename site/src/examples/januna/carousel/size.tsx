import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ovadev-gmbh/ui-januna";

const tables = [
  { name: "T4", detail: "2 seats, free until 21:00" },
  { name: "T7", detail: "4 seats, free from 20:15" },
  { name: "T9", detail: "6 seats, free all evening" },
  { name: "Terrace 3", detail: "4 seats, free from 20:30" },
  { name: "Bar 2", detail: "2 stools, free now" },
];

export default function CarouselSize() {
  return (
    <div className="w-full max-w-xl px-12">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {tables.map((table) => (
            <CarouselItem key={table.name} className="basis-1/2 sm:basis-1/3">
              <Card size="sm">
                <CardContent className="flex flex-col gap-1">
                  <span className="text-label-14">{table.name}</span>
                  <span className="text-label-13 text-content-secondary">{table.detail}</span>
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
