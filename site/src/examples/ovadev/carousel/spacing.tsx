import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ovadev-gmbh/ui-ovadev";

const months = [
  { month: "May 2026", amount: "44'370.00" },
  { month: "June 2026", amount: "128'884.00" },
  { month: "July 2026", amount: "223'349.00" },
  { month: "August 2026", amount: "190'785.00" },
  { month: "September 2026", amount: "65'660.00" },
];

export default function CarouselSpacing() {
  return (
    <div className="w-full max-w-xl px-12">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent className="-ml-2">
          {months.map((m) => (
            <CarouselItem key={m.month} className="basis-1/2 pl-2 sm:basis-1/3">
              <Card size="sm">
                <CardContent className="flex flex-col gap-1">
                  <span className="text-label-12 text-content-secondary">{m.month}</span>
                  <span className="text-label-13-mono">CHF {m.amount}</span>
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
