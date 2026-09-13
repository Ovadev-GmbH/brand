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
} from "@ovadev-gmbh/ui-internal";
import { EllipsisIcon } from "lucide-react";

const keys = [
  { name: "Checkout backend", prefix: "sk_live_4f9a", lastUsed: "2 minutes ago" },
  { name: "Reporting export", prefix: "sk_live_b21c", lastUsed: "yesterday" },
  { name: "Old staging key", prefix: "sk_test_77e0", lastUsed: "3 months ago" },
];

export default function TableWithActions() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Key</TableHead>
            <TableHead>Prefix</TableHead>
            <TableHead>Last used</TableHead>
            <TableHead className="w-10">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {keys.map((key) => (
            <TableRow key={key.prefix}>
              <TableCell>{key.name}</TableCell>
              <TableCell className="text-label-13-mono text-content-secondary">{key.prefix}…</TableCell>
              <TableCell className="text-content-secondary">{key.lastUsed}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label={`Actions for ${key.name}`} />}>
                    <EllipsisIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                    <DropdownMenuItem>Rotate</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">Revoke</DropdownMenuItem>
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
