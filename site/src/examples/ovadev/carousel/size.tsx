import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ovadev-gmbh/ui-ovadev";

const regions = [
  { name: "ch-zrh-1", deployments: 214 },
  { name: "ch-gva-1", deployments: 73 },
  { name: "eu-central-1", deployments: 158 },
  { name: "eu-west-1", deployments: 96 },
  { name: "eu-north-1", deployments: 41 },
];

export default function CarouselSize() {
  return (
    <div className="w-full max-w-xl px-12">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {regions.map((region) => (
            <CarouselItem key={region.name} className="basis-1/2 sm:basis-1/3">
              <Card size="sm">
                <CardContent className="flex flex-col gap-1">
                  <span className="text-label-13-mono">{region.name}</span>
                  <span className="text-label-12 text-content-secondary">
                    <span className="text-label-12-mono">{region.deployments}</span> deployments in September
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
