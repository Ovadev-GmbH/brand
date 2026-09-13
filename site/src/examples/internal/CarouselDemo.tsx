import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ovadev-gmbh/ui-internal";

const releases = [
  { version: "2026.09.3", date: "2026-09-12", summary: "Invoice exports run per tenant" },
  { version: "2026.09.2", date: "2026-09-08", summary: "API keys show when they were last used" },
  { version: "2026.09.1", date: "2026-09-02", summary: "Deployments to ch-gva-1" },
  { version: "2026.08.4", date: "2026-08-27", summary: "Audit log filters by member" },
];

export default function CarouselDemo() {
  return (
    <div className="w-full max-w-xs px-12">
      <Carousel aria-label="Releases" className="w-full">
        <CarouselContent>
          {releases.map((release) => (
            <CarouselItem key={release.version}>
              <Card size="sm">
                <CardContent className="flex aspect-video flex-col justify-between gap-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-label-13-mono">{release.version}</span>
                    <span className="text-label-12-mono text-content-tertiary">{release.date}</span>
                  </div>
                  <span className="text-label-13">{release.summary}</span>
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
