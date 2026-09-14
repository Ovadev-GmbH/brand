import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-ovadev";
import { EllipsisIcon } from "lucide-react";

export default function CardWithAction() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Türlersee shop</CardTitle>
        <CardDescription className="text-label-13-mono">https://tuerlersee.ticketova.ch</CardDescription>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Actions for the Türlersee shop" />}>
              <EllipsisIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Open shop</DropdownMenuItem>
              <DropdownMenuItem>Edit opening hours</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Close for the season</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-3">
        <Badge variant="secondary">Open</Badge>
        <span className="text-label-13-mono text-content-secondary">Last sale 2026-09-13 14:02, CHF 8.00</span>
      </CardContent>
    </Card>
  );
}
