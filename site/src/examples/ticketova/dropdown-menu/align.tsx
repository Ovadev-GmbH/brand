import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@ovadev-gmbh/ui-ticketova";
import { DotsThreeIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function DropdownMenuAlign() {
  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>Export invoices</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>As CSV</DropdownMenuItem>
          <DropdownMenuItem>As PDF bundle</DropdownMenuItem>
          <DropdownMenuItem>To accounting</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="icon" aria-label="Actions for INV-2026-0142" />}>
          <DotsThreeIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>Open invoice</DropdownMenuItem>
          <DropdownMenuItem>Send reminder</DropdownMenuItem>
          <DropdownMenuItem>Download PDF</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
