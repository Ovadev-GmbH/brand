import {
  Button,
  ButtonGroup,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-ovadev";
import { EllipsisIcon } from "lucide-react";

export default function ButtonGroupDemo() {
  return (
    <ButtonGroup aria-label="Post: TICKETOVA at Türlersee">
      <Button variant="outline">Preview</Button>
      <Button variant="outline">Publish</Button>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" size="icon" aria-label="More actions" />}>
          <EllipsisIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>Duplicate as German</DropdownMenuItem>
          <DropdownMenuItem>Copy link</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Delete draft</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
}
