import {
  Button,
  ButtonGroup,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-ticketova";
import { DotsThreeIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function ButtonGroupDemo() {
  return (
    <ButtonGroup aria-label="Invoice INV-2026-0142">
      <Button variant="outline">Download PDF</Button>
      <Button variant="outline">Send reminder</Button>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" size="icon" aria-label="More actions" />}>
          <DotsThreeIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>Issue credit note</DropdownMenuItem>
          <DropdownMenuItem>Copy invoice ID</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Void invoice</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
}
