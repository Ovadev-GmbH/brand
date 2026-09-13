import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ovadev-gmbh/ui-januna";

const waitlist = [
  { party: "Brunner, party of 2", note: "Bar seats are fine", waiting: "4 min" },
  { party: "Weber, party of 4", note: "Terrace or inside", waiting: "12 min" },
  { party: "Walk-in, party of 3", note: "One high chair", waiting: "18 min" },
  { party: "Rossi, party of 5", note: "Arriving from the station", waiting: "25 min" },
];

export default function CarouselOrientation() {
  return (
    <div className="w-72 py-12">
      <Carousel orientation="vertical" opts={{ align: "start" }}>
        <CarouselContent className="-mt-2 h-52">
          {waitlist.map((entry) => (
            <CarouselItem key={entry.party} className="basis-1/2 pt-2">
              <Card size="sm" className="h-full">
                <CardContent className="flex flex-col gap-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-label-14">{entry.party}</span>
                    <span className="text-label-13-mono text-content-secondary">{entry.waiting}</span>
                  </div>
                  <span className="text-label-13 text-content-secondary">{entry.note}</span>
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
