import {
  Skeleton,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-ovadev";

const rows = [0, 1, 2, 3];

export default function SkeletonTable() {
  return (
    <div className="w-full max-w-xl">
      <Table aria-busy="true">
        <TableCaption>Loading posts published in September 2026.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Post</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Published</TableHead>
            <TableHead className="text-right">Readers</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row}>
              <TableCell>
                <Skeleton className="h-4 w-28" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-20" />
              </TableCell>
              <TableCell>
                <Skeleton className="ml-auto h-4 w-16" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
