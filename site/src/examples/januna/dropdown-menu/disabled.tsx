import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@ovadev-gmbh/ui-januna";

export default function DropdownMenuDisabled() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Amir Haddad, 18:00</DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        <DropdownMenuItem>Seat guests</DropdownMenuItem>
        <DropdownMenuItem>Edit booking</DropdownMenuItem>
        <DropdownMenuItem disabled>
          Send reminder
          <span className="ml-auto text-label-12 text-content-tertiary">Sent at 16:00</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          Refund deposit
          <span className="ml-auto text-label-12 text-content-tertiary">No deposit taken</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
