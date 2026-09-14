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
        <CardTitle>Invoice webhook</CardTitle>
        <CardDescription className="text-label-13-mono">https://hooks.acme-logistics.ch/ova/invoices</CardDescription>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Actions for invoice webhook" />}>
              <EllipsisIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Send test event</DropdownMenuItem>
              <DropdownMenuItem>Rotate signing secret</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Delete webhook</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-3">
        <Badge variant="secondary">Delivered</Badge>
        <span className="text-label-13-mono text-content-secondary">2026-09-13 14:02 UTC, 200 in 184 ms</span>
      </CardContent>
    </Card>
  );
}
