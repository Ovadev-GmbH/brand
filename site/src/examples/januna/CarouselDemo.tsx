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
  { name: "Lunch", hours: "11:30 to 14:30", covers: 64 },
  { name: "Afternoon", hours: "14:30 to 17:30", covers: 18 },
  { name: "Dinner", hours: "18:00 to 23:00", covers: 142 },
  { name: "Bar", hours: "23:00 to 01:00", covers: 37 },
];

export default function CarouselDemo() {
  return (
    <div className="w-full max-w-xs px-12">
      <Carousel aria-label="Shifts on Saturday" className="w-full">
        <CarouselContent>
          {shifts.map((shift) => (
            <CarouselItem key={shift.name}>
              <Card size="sm">
                <CardContent className="flex aspect-video flex-col justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-heading-16">{shift.name}</span>
                    <span className="text-label-13-mono text-content-secondary">{shift.hours}</span>
                  </div>
                  <span className="text-label-14">
                    <span className="text-heading-24">{shift.covers}</span> covers
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
