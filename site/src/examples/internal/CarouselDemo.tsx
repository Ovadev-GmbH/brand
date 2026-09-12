import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ovadev-gmbh/ui-internal";

const regions = [
  { name: "eu-central-1", deployments: 214 },
  { name: "eu-west-1", deployments: 96 },
  { name: "us-east-1", deployments: 158 },
  { name: "ap-southeast-1", deployments: 41 },
  { name: "ch-zurich-1", deployments: 73 },
];

export default function CarouselDemo() {
  return (
    <div className="w-full max-w-xs px-10">
      <Carousel className="w-full">
        <CarouselContent>
          {regions.map((region) => (
            <CarouselItem key={region.name}>
              <Card size="sm">
                <CardContent className="flex aspect-video flex-col items-center justify-center gap-1">
                  <span className="text-heading-32 font-mono tabular-nums">{region.deployments}</span>
                  <span className="text-label-13 text-content-secondary">deployments, {region.name}</span>
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
