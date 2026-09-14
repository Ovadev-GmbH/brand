import {
  Badge,
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ovadev-gmbh/ui-ovadev";

const posts = [
  { id: "2026-09-08", summary: "Admission control at the Türlersee lido", state: "Draft", variant: "secondary" },
  { id: "2026-07-10", summary: "Building a palette switcher", state: "Published", variant: "outline" },
  { id: "2026-07-02", summary: "What we owe the businesses that run on us", state: "Published", variant: "outline" },
  { id: "2026-06-24", summary: "Postgres tricks we reach for", state: "Unpublished", variant: "destructive" },
] as const;

export default function CarouselOrientation() {
  return (
    <div className="w-72 py-12">
      <Carousel orientation="vertical" opts={{ align: "start" }}>
        <CarouselContent className="-mt-2 h-48">
          {posts.map((post) => (
            <CarouselItem key={post.id} className="basis-1/2 pt-2">
              <Card size="sm" className="h-full">
                <CardContent className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-label-13-mono">{post.id}</span>
                    <Badge variant={post.variant}>{post.state}</Badge>
                  </div>
                  <span className="text-label-12 text-content-secondary">{post.summary}</span>
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
