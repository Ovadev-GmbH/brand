import * as React from "react";
import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-ovadev";

const posts = [
  { title: "Admission control at the turnstile", published: "2026-09-08", minutes: "6 min", german: false },
  { title: "A season at Türlersee in numbers", published: "2026-08-24", minutes: "4 min", german: false },
];

export default function EmptyInTable() {
  const [germanOnly, setGermanOnly] = React.useState(true);
  const rows = germanOnly ? posts.filter((p) => p.german) : posts;

  return (
    <div className="flex w-full max-w-xl flex-col gap-2">
      <span className="text-label-13 text-content-secondary">
        Blog, {germanOnly ? "posts in German" : "all posts"}
      </span>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Post</TableHead>
            <TableHead>Published</TableHead>
            <TableHead className="text-right">Reading time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((post) => (
            <TableRow key={post.title}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="text-label-13-mono text-content-secondary">{post.published}</TableCell>
              <TableCell className="text-right text-label-13-mono">{post.minutes}</TableCell>
            </TableRow>
          ))}
          {rows.length === 0 ? (
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={3} className="whitespace-normal">
                <Empty>
                  <EmptyHeader>
                    <EmptyTitle>No posts in German</EmptyTitle>
                    <EmptyDescription>Every post on the blog is in English so far.</EmptyDescription>
                  </EmptyHeader>
                  <EmptyContent>
                    <Button variant="outline" size="sm" onClick={() => setGermanOnly(false)}>
                      Clear filter
                    </Button>
                  </EmptyContent>
                </Empty>
              </TableCell>
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </div>
  );
}
