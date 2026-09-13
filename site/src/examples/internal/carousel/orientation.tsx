import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  StatusDot,
} from "@ovadev-gmbh/ui-internal";

const incidents = [
  { id: "INC-0414", summary: "Slow invoice exports for bergwerk-ag", state: "active" },
  { id: "INC-0413", summary: "Elevated 5xx on billing-worker", state: "ready" },
  { id: "INC-0412", summary: "Delayed webhooks in eu-central-1", state: "ready" },
  { id: "INC-0411", summary: "Certificate renewal failed for helvetia-labs", state: "error" },
] as const;

export default function CarouselOrientation() {
  return (
    <div className="w-72 py-12">
      <Carousel orientation="vertical" opts={{ align: "start" }}>
        <CarouselContent className="-mt-2 h-48">
          {incidents.map((incident) => (
            <CarouselItem key={incident.id} className="basis-1/2 pt-2">
              <Card size="sm" className="h-full">
                <CardContent className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-label-13-mono">{incident.id}</span>
                    <StatusDot state={incident.state} label titlePrefix={incident.id} />
                  </div>
                  <span className="text-label-12 text-content-secondary">{incident.summary}</span>
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
