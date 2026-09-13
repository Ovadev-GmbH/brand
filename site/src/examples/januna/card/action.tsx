import {
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
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { MoreHorizontalIcon } from "@hugeicons/core-free-icons";

export default function CardWithAction() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Private dining room</CardTitle>
        <CardDescription>Up to 14 guests, minimum spend CHF 900.00</CardDescription>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="ghost" size="icon-sm" aria-label="Actions for the private dining room" />}
            >
              <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Block for tonight</DropdownMenuItem>
              <DropdownMenuItem>Change minimum spend</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Close room</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <CardContent className="flex items-baseline justify-between gap-3">
        <span className="text-label-13 text-content-secondary">Next booking</span>
        <span className="text-label-14">
          Fri <span className="text-label-13-mono">19:00</span>, Meier AG, party of 12
        </span>
      </CardContent>
    </Card>
  );
}
