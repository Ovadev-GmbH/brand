import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-ovadev";
import { EllipsisIcon } from "lucide-react";

const pages = [
  { name: "About us", path: "/en/about", updated: "2 minutes ago" },
  { name: "Contact", path: "/en/contact", updated: "yesterday" },
  { name: "Imprint", path: "/en/imprint", updated: "3 months ago" },
];

export default function TableWithActions() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Page</TableHead>
            <TableHead>Path</TableHead>
            <TableHead>Last edited</TableHead>
            <TableHead className="w-10">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pages.map((page) => (
            <TableRow key={page.path}>
              <TableCell>{page.name}</TableCell>
              <TableCell className="text-label-13-mono text-content-secondary">{page.path}</TableCell>
              <TableCell className="text-content-secondary">{page.updated}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label={`Actions for ${page.name}`} />}>
                    <EllipsisIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Open German version</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">Unpublish</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
