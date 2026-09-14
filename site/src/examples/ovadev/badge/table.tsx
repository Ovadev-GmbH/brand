import { Badge, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-ovadev";

const posts = [
  { title: "Admission control at the turnstile", tag: "Engineering", minutes: 6, draft: false },
  { title: "A season at Türlersee in numbers", tag: "Customers", minutes: 4, draft: false },
  { title: "What JANUNA is", tag: "Products", minutes: 3, draft: true },
];

export default function BadgeInTable() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Post</TableHead>
            <TableHead>Tag</TableHead>
            <TableHead className="text-right">Min</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((p) => (
            <TableRow key={p.title}>
              <TableCell>
                <span className="flex items-center gap-2">
                  {p.title}
                  {p.draft ? <Badge variant="secondary">Draft</Badge> : null}
                </span>
              </TableCell>
              <TableCell className="text-content-secondary">{p.tag}</TableCell>
              <TableCell className="text-right text-label-13-mono">{p.minutes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
