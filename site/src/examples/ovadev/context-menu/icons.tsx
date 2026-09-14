import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@ovadev-gmbh/ui-ovadev";
import { ExternalLinkIcon, FileTextIcon, MailIcon, ReceiptIcon } from "lucide-react";

export default function ContextMenuIcons() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-80 flex-col items-center justify-center gap-1 border border-dashed border-divider-strong">
        <span className="text-label-13">Strandbad Türlersee</span>
        <span className="text-label-12 text-content-tertiary">Right-click the customer</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>
          <ExternalLinkIcon />
          Open shop
        </ContextMenuItem>
        <ContextMenuItem>
          <MailIcon />
          Write to contact
        </ContextMenuItem>
        <ContextMenuItem>
          <FileTextIcon />
          Case study
        </ContextMenuItem>
        <ContextMenuItem>
          <ReceiptIcon />
          Quotes
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
