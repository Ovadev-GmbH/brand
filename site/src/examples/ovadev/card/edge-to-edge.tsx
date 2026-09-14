import { Button, Card, CardAction, CardContent, CardHeader, CardTitle } from "@ovadev-gmbh/ui-ovadev";

const posts = [
  { date: "2026-07-10", author: "Beni", title: "Building a palette switcher" },
  { date: "2026-07-02", author: "Robin", title: "What we owe the businesses that run on us" },
  { date: "2026-06-24", author: "Philip", title: "Postgres tricks we reach for" },
];

export default function CardEdgeToEdge() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Latest posts</CardTitle>
        <CardAction>
          <Button variant="ghost" size="sm">
            View all
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="-mb-(--card-spacing) px-0">
        <ul className="m-0 list-none p-0">
          {posts.map((post) => (
            <li
              key={post.date}
              className="flex items-baseline justify-between gap-3 border-t border-divider px-(--card-spacing) py-2.5 text-label-13"
            >
              <span className="flex flex-col">
                <span className="text-label-13">{post.title}</span>
                <span className="text-label-12 text-content-secondary">{post.author}</span>
              </span>
              <span className="text-label-13-mono">{post.date}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
