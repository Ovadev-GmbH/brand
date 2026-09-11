import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ovadev-gmbh/ui-januna";

const shifts = [
  { name: "Lunch", covers: 64 },
  { name: "Afternoon", covers: 18 },
  { name: "Dinner", covers: 142 },
  { name: "Late", covers: 37 },
  { name: "Brunch", covers: 96 },
];

export default function CarouselDemo() {
  return (
    <div className="w-full max-w-xs px-12">
      <Carousel className="w-full">
        <CarouselContent>
          {shifts.map((shift) => (
            <CarouselItem key={shift.name}>
              <Card size="sm">
                <CardContent className="flex aspect-square flex-col items-center justify-center gap-1">
                  <span className="text-4xl font-medium tabular-nums">{shift.covers}</span>
                  <span className="text-sm text-muted-foreground">covers, {shift.name}</span>
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
