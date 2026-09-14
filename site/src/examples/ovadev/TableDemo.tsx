import { Badge, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-ovadev";

const posts = [
  { id: "2026-09-08", title: "Admission control at the Türlersee lido", author: "Beni", status: "Draft", minutes: "6 min" },
  { id: "2026-08-24", title: "What a pool season taught us about queues", author: "Robin", status: "Review", minutes: "9 min" },
  { id: "2026-07-30", title: "JANUNA, a first look at the till", author: "Beni", status: "Published", minutes: "4 min" },
  { id: "2026-06-18", title: "Why TICKETOVA has no app", author: "Philip", status: "Published", minutes: "5 min" },
  { id: "2026-05-02", title: "Ovadev moves to Baar", author: "Robin", status: "Published", minutes: "2 min" },
] as const;

const badgeVariant = { Draft: "outline", Review: "destructive", Published: "secondary" } as const;

export default function TableDemo() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Post</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Reading time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="text-label-13-mono">{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell className="text-content-secondary">{post.author}</TableCell>
              <TableCell>
                <Badge variant={badgeVariant[post.status]}>{post.status}</Badge>
              </TableCell>
              <TableCell className="text-right text-label-13-mono">{post.minutes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
