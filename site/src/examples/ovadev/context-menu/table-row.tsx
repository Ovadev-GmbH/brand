import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-ovadev";

const posts = [
  { date: "2026-09-14", title: "Pool season 2026 in numbers", reading: "6 min" },
  { date: "2026-08-27", title: "JANUNA: the kitchen display", reading: "4 min" },
  { date: "2026-08-02", title: "Why the site is dark", reading: "3 min" },
];

export default function ContextMenuTableRow() {
  return (
    <div className="w-full max-w-md">
      <Table>
        <TableCaption>Right-click a row for its actions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Post</TableHead>
            <TableHead className="text-right">Reading</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <ContextMenu key={post.date}>
              <ContextMenuTrigger render={<TableRow />}>
                <TableCell className="text-label-13-mono">{post.date}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell className="text-right text-label-13-mono">{post.reading}</TableCell>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-48">
                <ContextMenuItem>Open post</ContextMenuItem>
                <ContextMenuItem>Edit</ContextMenuItem>
                <ContextMenuItem>Copy link</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">Unpublish</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
