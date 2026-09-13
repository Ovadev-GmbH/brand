import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { MoreHorizontalIcon } from "@hugeicons/core-free-icons";

export default function DropdownMenuAlign() {
  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>Export bookings</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Run sheet as PDF</DropdownMenuItem>
          <DropdownMenuItem>Guest list as CSV</DropdownMenuItem>
          <DropdownMenuItem>Deposits as CSV</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="icon" aria-label="Actions for the booking at 19:30" />}>
          <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>Open booking</DropdownMenuItem>
          <DropdownMenuItem>Send reminder</DropdownMenuItem>
          <DropdownMenuItem>Seat guests</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
